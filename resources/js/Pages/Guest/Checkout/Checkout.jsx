import GuestLayout from "@/Layouts/GuestLayout";
import React, { useEffect, useState } from "react";
import { Radio, RadioGroup } from '@headlessui/react'
import { DeleteIcon, InformIcon } from "@/Components/Outline";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { Dropdown, Select } from "antd";
import { formatAmount } from "@/Composables";
import Button from "@/Components/Button";
import toast from "react-hot-toast";

export default function Checkout({ cartItems, totalAmount }) {

    const deliveryMethods = [
        { name: '宅配', value: 'delivery', amount: '150' },
        { name: '7-11 超商取貨 免運費', value: '7e-pickup', amount: '0' },
        { name: '全家 超商取貨 免運費', value: 'fm-pickup', amount: '0' },
    ];

    const paymentMetod = [
        { name: '線上刷卡', value: 'online_banking' }
    ];

    const [selected, setSelected] = useState(deliveryMethods[0])
    const [selectedPayment, setSelectedPayment] = useState(paymentMetod[0])
    const [isLoading, setIsLoading] = useState(false);
    const [getPhoneCode, setGetPhoneCode] = useState([]);
    const [getStates, setGetStates] = useState([]);

    const fetchPhoneCode = async  () => {
        setIsLoading(true);
        try {

            const response = await axios.get('/getPhoneCode');
            
            setGetPhoneCode(response.data);
            
        } catch (error) {
            console.error('error', error);
        } finally {
            setIsLoading(false);
        }
    }

    const fetchStates = async  () => {
        setIsLoading(true);
        try {

            const response = await axios.get('/getState');
            
            setGetStates(response.data);
            
        } catch (error) {
            console.error('error', error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchPhoneCode();
        fetchStates();
    }, []);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        dial_code: '886',
        delivery_method: selected,
        payment_method: selectedPayment,
        phone_no: '',
        state: null,
        city: null,
        address: '',
        remark: '',
    });

    useEffect(() => {
        if (selected !== data.delivery_method) {
            setData('delivery_method', selected);
        }
    }, [selected])

    const selectedState = getStates.find((s) => s.CityName === data.state);
    const areaOptions = selectedState?.AreaList?.map(area => ({
        label: area.AreaName,
        value: area.AreaName,
    })) || [];

    const placeOrder = (e) => {
        e.preventDefault();
        setIsLoading(true);

        post('/place-order', {
            preserveScroll: true,
            onSuccess: () => {
                window.location.href = `/order-placed-succesfull`
            }
        })

    }

    return (
        <GuestLayout>
            <div className="flex flex-col gap-2 bg-gray-25">
                {/* Product details */}
                <div className="p-4 flex flex-col gap-3 bg-white">
                    <div className="py-2 flex items-center gap-4">
                        <div className="text-lg font-bold">訂單商品</div>
                        <div className="p-[2px] rounded-[6px] bg-gradient-to-r from-[#531985] to-[#A44A98]">
                            <div className="bg-white rounded-[5px] py-1.5 px-3">
                                <div className=" bg-linear rounded-[5px] bg-clip-text text-transparent text-xs font-bold">
                                    {cartItems.length} 件
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        {
                            cartItems.map((item, index) => (
                                <div key={index} className="flex items-center gap-3 py-5">
                                    <div className="max-w-20 max-h-20 w-full h-full overflow-hidden border border-gray-100 rounded bg-gray-25">
                                        <img src={item.product.product_thumbnail} alt={item.product.product_thumbnail} className="object-cover w-full h-full" />
                                    </div>
                                    <div className="flex flex-col justify-between w-full max-h-20 min-h-20 h-full">
                                        <div className="flex items-center justify-between w-full">
                                            <div className="text-gray-950 text-base font-medium">{item.product.name}</div>
                                            <div className="text-sm font-bold text-gray-950">x {item.quantity}</div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="bg-linear bg-clip-text text-transparent text-base font-bold">$ {item.total_price}</div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* Delivery Methods */}
                <div className="p-4 flex flex-col gap-3 bg-white">
                    <div className="py-2 flex items-center gap-4">
                        <div className="text-lg text-gray-950 font-bold">配送方式</div>
                    </div>
                    <div>
                        <RadioGroup by="name" value={selected} onChange={setSelected} className="flex flex-col gap-3">
                            {deliveryMethods.map((method) => (
                                <Radio key={method.name} value={method}>
                                {({ checked }) => (
                                    <div
                                    className={`relative flex cursor-pointer rounded-lg px-5 py-4 border transition ${
                                        checked ? 'bg-indigo-50 text-indigo-900 border-[#531985] ' : 'bg-white text-indigo-900 border-gray-100'
                                    }`}
                                    >
                                    <div className="flex w-full items-center justify-between">
                                        <div className="text-base flex justify-between items-center w-full">
                                            <div className="flex items-center gap-4">
                                                <div>
                                                    {/* ✅ Custom Radio Button */}
                                                    <div
                                                        className={`w-6 h-6 rounded-full border flex items-center justify-center transition ${
                                                            checked ? 'border-transparent' : 'border-gray-300'
                                                        }`}
                                                        style={checked ? { background: 'linear-gradient(90deg, #531985 0.21%, #A44A98 93.09%)' } : {}}
                                                    >
                                                        <div className="bg-white rounded-full w-[23px] h-[22px] flex justify-center items-center">
                                                            <div
                                                                className={`w-2.5 h-2.5 rounded-full transition `}
                                                                style={checked ? { background: 'linear-gradient(90deg, #531985 0.21%, #A44A98 93.09%)' } : {}}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={`font-semibold ${checked ? 'text-indigo-900' : 'text-gray-950'}`}>
                                                    {method.name}
                                                </div>
                                            </div>
                                            <div
                                                className={`${
                                                checked
                                                    ? 'bg-linear bg-clip-text text-transparent text-base font-bold'
                                                    : 'text-gray-950'
                                                } text-base font-bold`}
                                            >
                                                $ {method.amount}
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                )}
                                </Radio>
                            ))}
                        </RadioGroup>
                    </div>
                </div>

                {/* Payment Method details */}
                <div className="p-4 flex flex-col gap-3 bg-white">
                    <div className="py-2 flex items-center gap-4">
                        <div className="text-lg text-gray-950 font-bold">付款方式</div>
                    </div>
                    <div>
                        <RadioGroup by="name" value={selectedPayment} onChange={setSelectedPayment} className="flex flex-col gap-3">
                            {paymentMetod.map((method) => (
                                <Radio key={method.name} value={method}>
                                {({ checked }) => (
                                    <div
                                    className={`relative flex cursor-pointer rounded-lg px-5 py-4 border transition ${
                                        checked ? 'bg-indigo-50 text-indigo-900 border-[#531985] ' : 'bg-white text-indigo-900 border-gray-100'
                                    }`}
                                    >
                                    <div className="flex w-full items-center justify-between">
                                        <div className="text-base flex justify-between items-center w-full">
                                            <div className="flex items-center gap-4">
                                                <div>
                                                    {/* ✅ Custom Radio Button */}
                                                    <div
                                                        className={`w-6 h-6 rounded-full border flex items-center justify-center transition ${
                                                            checked ? 'border-transparent' : 'border-gray-300'
                                                        }`}
                                                        style={checked ? { background: 'linear-gradient(90deg, #531985 0.21%, #A44A98 93.09%)' } : {}}
                                                    >
                                                        <div className="bg-white rounded-full w-[23px] h-[22px] flex justify-center items-center">
                                                            <div
                                                                className={`w-2.5 h-2.5 rounded-full transition `}
                                                                style={checked ? { background: 'linear-gradient(90deg, #531985 0.21%, #A44A98 93.09%)' } : {}}
                                                            ></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={`font-semibold ${checked ? 'text-indigo-900' : 'text-gray-950'}`}>
                                                    {method.name}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                )}
                                </Radio>
                            ))}
                        </RadioGroup>
                    </div>
                </div>

                {/* Receiver details */}
                <div className="p-4 flex flex-col gap-3 bg-white">
                    <div className="py-2 flex items-center gap-4">
                        <div className="text-lg text-gray-950 font-bold">收件人資訊</div>
                    </div>
                    <div className="p-4 border border-blue-200 bg-blue-50 rounded-[5px] flex gap-4">
                        <div>
                            <InformIcon />
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="text-blue-600 text-base font-bold">訂單資訊與電子發票將寄送至您的電子信箱</div>
                            <div className="text-blue-950 text-sm">請確認輸入的電子郵件正確無誤，我們將寄送訂單編號與電子發票。您可使用訂單編號至康霖官網查詢配送進度。</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <div className="text-gray-950 text-base font-medium max-w-[100px] w-full">收件人姓名 <span className="text-red-600">*</span></div>
                            <div className="w-full">
                                <TextInput 
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    className="block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) => setData('name', e.target.value)}
                                    placeholder="陳美美"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-gray-950 text-base font-medium max-w-[100px] w-full">電子郵件 <span className="text-red-600">*</span></div>
                            <div className="w-full">
                                <TextInput 
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="meimei@yahoo.com"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-gray-950 text-base font-medium max-w-[100px] w-full">手機號碼 <span className="text-red-600">*</span></div>
                            <div className="w-full flex items-center gap-3">
                                <Select 
                                    value={data.dial_code} 
                                    onChange={(value) => setData('dial_code', value)} 
                                    options={getPhoneCode.map((item) => ({
                                        label: item.phoneCode, // What user sees
                                        value: item.phoneCode, // Ensures it prefixes with +
                                    }))}
                                    loading={isLoading}
                                    className="antd-select-custom focus:ring-offset-transparent max-w-28 w-full"
                                />
                                <TextInput 
                                    id="phone_no"
                                    type="number"
                                    name="phone_no"
                                    value={data.phone_no}
                                    className="block w-full"
                                    isFocused={true}
                                    onChange={(e) => setData('phone_no', e.target.value)}
                                    placeholder="912 345 678"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-gray-950 text-base font-medium max-w-[100px] w-full">縣市和區域 <span className="text-red-600">*</span></div>
                            <div className="w-full flex items-center gap-3">
                                <Select 
                                    value={data.state} 
                                    onChange={(value) => {
                                        setData('state', value);
                                        setData('city', ''); // reset city
                                    }} 
                                    options={getStates.map((item) => ({
                                        label: item.CityName,
                                        value: item.CityName,
                                    }))}
                                    loading={isLoading}
                                    className="antd-select-custom focus:ring-offset-transparent w-full"
                                    placeholder="選擇縣市"
                                />
                               <Select 
                                    value={data.city}
                                    onChange={(value) => setData('city', value)}
                                    options={areaOptions}
                                    disabled={!data.state}
                                    loading={isLoading}
                                    className="antd-select-custom focus:ring-offset-transparent w-full"
                                    placeholder="選擇區"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-gray-950 text-base font-medium max-w-[100px] w-full">完整地址 <span className="text-red-600">*</span></div>
                            <div className="w-full">
                                <TextInput 
                                    id="address"
                                    type="text"
                                    name="address"
                                    value={data.address}
                                    className="block w-full"
                                    isFocused={true}
                                    onChange={(e) => setData('address', e.target.value)}
                                    placeholder="輸入地址"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Others */}
                <div className="p-4 flex flex-col gap-3 bg-white">
                    <div className="py-2 flex items-center gap-4">
                        <div className="text-lg text-gray-950 font-bold">其它</div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <div className="text-gray-950 text-base font-medium max-w-[100px] w-full">備注</div>
                            <div className="w-full">
                                <TextInput 
                                    id="remark"
                                    type="text"
                                    name="remark"
                                    value={data.remark}
                                    className="block w-full"
                                    isFocused={true}
                                    onChange={(e) => setData('remark', e.target.value)}
                                    placeholder="輸入備注"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sticky bottom-0 border-t border-gray-100 bg-white flex flex-col ">
                <div className="p-4 flex items-center gap-3 w-full">
                    <div className="w-[7px] h-5 bg-indigo-900"></div>
                    <div className="text-indigo-900 text-lg font-bold">結帳明細清單</div>
                </div>
                <div className="p-4 flex flex-col gap-2 bg-gray-25">
                    <div className="flex justify-between">
                        <div className="text-gray-500 text-base">商品總價</div>
                        <div className="text-gray-950 text-base font-medium">$ {totalAmount}</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-500 text-base">運費</div>
                        <div className="text-gray-950 text-base font-medium">$ {data.delivery_method.amount}</div>
                    </div>
                </div>
                <div className="border-t border-gray-25 flex justify-between p-4">
                    <div className="text-gray-950 text-lg font-medium">應付總金額</div>
                    <div className="bg-linear bg-clip-text text-transparent text-lg font-bold">${ (Number(totalAmount) + Number(data.delivery_method.amount)).toLocaleString() }</div>
                </div>
                <div className="p-4 flex w-full">
                    <Button size="lg" className="w-full" onClick={placeOrder} disabled={isLoading}>前往結帳</Button>
                </div>
            </div>
        </GuestLayout>
    )
}