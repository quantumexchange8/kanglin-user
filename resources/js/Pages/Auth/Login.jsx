import Button from '@/Components/Button';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const { t } = useTranslation();

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <div className='flex flex-col w-full justify-center items-center min-h-[80vh]'>
                <div className='p-10 max-w-[414px] w-full'>
                    <form onSubmit={submit} className='flex flex-col gap-10'>
                        <div className='flex flex-col items-center gap-2'>
                            <div className='text-2xl font-bold bg-gradient-to-r from-[#531985] to-[#A44A98] bg-clip-text text-transparent '>{t('welcome_back')}</div>
                            <div className='text-gray-950 text-base'>{t('welcome_2')}</div>
                        </div>

                        <div className='flex flex-col gap-8'>
                            <div className='flex flex-col gap-7'>
                                <div>
                                    <InputLabel htmlFor="email" value="Email" />
                                    <TextInput
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        isFocused={true}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder="輸入帳號/身分證/電子郵件/手機號"
                                    />

                                    <InputError message={errors.email} className="mt-2" />
                                </div>
                                <div >
                                    <InputLabel htmlFor="password" value="Password" />
                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block w-full"
                                        autoComplete="current-password"
                                        onChange={(e) => setData('password', e.target.value)}
                                        placeholder="輸入密碼"
                                    />

                                    <InputError message={errors.password} className="mt-2" />
                                </div>
                            </div>

                            <div className='flex items-center justify-between'>
                                <div className="">
                                    <label className="flex items-center">
                                        <Checkbox
                                            name="remember"
                                            checked={data.remember}
                                            onChange={(e) =>
                                                setData('remember', e.target.checked)
                                            }
                                        />
                                        <span className="ms-2 text-sm text-gray-600">
                                            {t('remember_me')}
                                        </span>
                                    </label>
                                </div>
                                <div>
                                    {canResetPassword && (
                                        <Link
                                            href={route('password.request')}
                                            className="rounded-md text-sm text-blue-600 font-bold underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            {t('forget_your_password')}?
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <Button size='lg'>{t('login')}</Button>
                            <div className='flex items-center gap-3'>
                                <div className='h-[1px] w-full bg-[#B4BCC5]'></div>
                                <div className='w-full text-center'>{t('no_account')}</div>
                                <div className='h-[1px] w-full bg-[#B4BCC5]'></div>
                            </div>  
                            <Button size='lg' variant='neutral'>{t('register')}</Button>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
