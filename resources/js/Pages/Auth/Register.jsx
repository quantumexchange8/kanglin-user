import Button from '@/Components/Button';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import { Logo } from '@/Components/Logo';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function Register() {

    const { t } = useTranslation();

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <div className='w-full flex flex-col'>
            {/* Header */}
            <div className='px-20 py-5 bg-white flex justify-between items-center sticky top-0 z-30 border-b border-gray-200'>
                <div>
                    <Logo />
                </div>
                {/* Stepper button */}
                <div>
                    <Button size='md'>
                        {t('next_step')}
                    </Button>
                </div>
            </div>

            {/* content */}
            <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu congue augue, a commodo massa. In tincidunt tristique odio, ut lacinia odio interdum at. Fusce nibh elit, maximus sed nulla vitae, ultrices molestie ante. Quisque eget magna eget quam vulputate bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus eleifend tellus sit amet nulla ornare, sed vestibulum ipsum hendrerit. In hac habitasse platea dictumst.

Aliquam ex felis, aliquet quis commodo nec, commodo vitae libero. Donec non lobortis enim. Aenean dui nisi, euismod posuere efficitur ac, euismod sit amet dui. Suspendisse condimentum porttitor ultrices. Vivamus a fringilla massa. Vestibulum enim nunc, tincidunt at faucibus et, elementum eget diam. Aenean finibus accumsan ex, vitae faucibus metus convallis nec. Fusce fermentum ex sed bibendum interdum. Nunc posuere bibendum odio, vitae efficitur nisl tristique et. Pellentesque sagittis eros nibh, ut auctor leo suscipit eu. Quisque nec lobortis risus. Aenean fringilla efficitur dui, nec egestas ligula ultricies et. Sed vitae mi vel quam maximus luctus ut a justo. In ullamcorper placerat lorem, vel efficitur tortor ultrices non. Aliquam nibh nisl, sodales non congue ac, hendrerit vel dolor.

Duis iaculis ligula vel ex tristique sagittis. Suspendisse id vehicula arcu, a bibendum metus. Pellentesque congue metus quis sem fringilla imperdiet. Maecenas fermentum congue nunc, non bibendum nulla vulputate ut. Donec porta, velit vel interdum elementum, turpis nibh pretium ligula, vitae finibus nulla dui at est. Aliquam augue diam, imperdiet quis vulputate eget, posuere quis lorem. Proin eu augue in neque hendrerit lacinia. Curabitur id maximus ante, et aliquam turpis. Ut condimentum sapien id dictum pretium. Fusce condimentum sapien lectus, eget feugiat ex aliquam ut. Suspendisse eu rutrum nisi, tincidunt mollis arcu. Aliquam quis odio ut nisi porta suscipit. Pellentesque quis convallis enim, vel scelerisque odio. Integer vestibulum elit id lectus interdum laoreet. Aliquam nunc metus, vulputate a velit nec, aliquam venenatis turpis. Sed ultrices magna aliquet elementum varius.

Donec justo dolor, tincidunt vitae faucibus a, tincidunt vel nunc. Sed vulputate massa felis, non commodo leo maximus eget. Vivamus congue eros non nisl ornare tempor. Suspendisse pretium, sapien non dignissim vehicula, neque orci ornare arcu, ut finibus libero libero id nulla. Ut id sodales tellus. Donec ultricies enim nulla, in elementum quam auctor quis. Aliquam id lacus et orci pulvinar rutrum eget id augue. Phasellus eros arcu, feugiat nec purus in, pharetra interdum est. Sed quis feugiat libero, a venenatis metus.

Integer justo tellus, auctor nec faucibus eu, faucibus vitae nibh. Donec lorem purus, lacinia feugiat suscipit eget, convallis ac justo. Maecenas dignissim dolor nec malesuada finibus. Fusce id congue sapien. Nam aliquam nibh sed odio iaculis aliquet. Donec aliquet nibh at turpis tincidunt placerat. Cras euismod commodo nibh, in tincidunt velit molestie nec. Pellentesque convallis tellus sit amet sagittis hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Sed finibus vulputate arcu, eu posuere purus porta sed. Curabitur pellentesque accumsan sodales. Ut congue lacinia felis a semper. Sed quis mauris tempus, ullamcorper ipsum vestibulum, iaculis lectus. Suspendisse dignissim nibh id interdum dictum. Donec at aliquam orci. Curabitur faucibus massa ut tortor varius, vel blandit lorem vulputate. Praesent sit amet blandit massa. Donec vitae tellus felis. Nullam hendrerit tristique odio, vitae imperdiet magna fringilla sit amet. Phasellus ultrices dolor nisl, nec tempus felis accumsan vitae.

Proin vestibulum dignissim venenatis. Nullam nec malesuada est, eget aliquam nibh. Nullam posuere at leo at dictum. Sed ligula tortor, pellentesque eget purus vel, tempor varius ligula. Fusce mattis nec diam at fermentum. Curabitur quis mattis urna. Sed sed augue sit amet orci feugiat feugiat. Nulla quis eros molestie sapien tristique sodales id ut arcu. Proin luctus augue non bibendum placerat. Duis sapien tortor, rhoncus at lectus vel, aliquet gravida ligula. Nulla gravida faucibus fermentum. Vivamus faucibus leo nisi. Morbi eu posuere massa, sit amet auctor augue. Vivamus fermentum lobortis leo, ut posuere magna finibus non. Nunc a elit tristique, maximus massa a, dapibus erat. Cras egestas dictum accumsan.

Curabitur sed nunc risus. Donec ut elit a magna feugiat dictum. Etiam tincidunt magna at mi maximus, non condimentum orci dapibus. Ut volutpat, nisl in bibendum faucibus, nulla dolor commodo sem, vel laoreet elit magna id lectus. Duis vitae elementum libero. Curabitur at tellus sit amet odio semper porta. Curabitur suscipit egestas fringilla.

Mauris dolor risus, elementum dictum velit vel, eleifend ultrices ligula. Curabitur et ante tristique, tincidunt metus non, congue mi. Nulla at aliquet enim. Fusce molestie luctus lacus, id molestie risus vulputate iaculis. Nam hendrerit lectus ac sem lacinia, nec viverra justo porttitor. Etiam sit amet pretium risus. Etiam elementum ultrices tortor, vel auctor libero varius in. Pellentesque ante ligula, maximus id neque eget, lacinia sodales diam. Vestibulum diam sem, ultricies sit amet sodales sed, faucibus sed odio. Phasellus sit amet justo neque. Sed tincidunt nibh ante. In lorem ex, posuere a elit et, egestas aliquet velit. Etiam interdum magna quis gravida egestas.

Aenean vitae justo euismod, mollis enim at, sagittis lectus. Duis elementum, erat ut consectetur egestas, ipsum velit vehicula urna, eu hendrerit eros ex vitae dui. Duis ex lorem, viverra in mattis ut, lobortis a est. Maecenas vitae blandit neque. Vivamus blandit augue mollis lorem vehicula elementum. In ac dapibus tortor, non luctus leo. Pellentesque malesuada tempus ante, eu condimentum purus tempus eu. Sed auctor vestibulum urna, fermentum pharetra enim dignissim id. In vestibulum, nisi sed rhoncus pretium, ipsum ex mollis dui, ut sagittis turpis velit at risus. Ut libero orci, ullamcorper sit amet fermentum quis, euismod in nulla. Ut sodales ultricies velit a scelerisque. Praesent mattis tellus vel eros faucibus, ut efficitur magna porta. Aliquam est velit, rutrum et ultricies sed, consectetur non ex. Maecenas viverra massa nisi, id pharetra diam pretium facilisis. Nunc in molestie massa.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu congue augue, a commodo massa. In tincidunt tristique odio, ut lacinia odio interdum at. Fusce nibh elit, maximus sed nulla vitae, ultrices molestie ante. Quisque eget magna eget quam vulputate bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus eleifend tellus sit amet nulla ornare, sed vestibulum ipsum hendrerit. In hac habitasse platea dictumst.

Aliquam ex felis, aliquet quis commodo nec, commodo vitae libero. Donec non lobortis enim. Aenean dui nisi, euismod posuere efficitur ac, euismod sit amet dui. Suspendisse condimentum porttitor ultrices. Vivamus a fringilla massa. Vestibulum enim nunc, tincidunt at faucibus et, elementum eget diam. Aenean finibus accumsan ex, vitae faucibus metus convallis nec. Fusce fermentum ex sed bibendum interdum. Nunc posuere bibendum odio, vitae efficitur nisl tristique et. Pellentesque sagittis eros nibh, ut auctor leo suscipit eu. Quisque nec lobortis risus. Aenean fringilla efficitur dui, nec egestas ligula ultricies et. Sed vitae mi vel quam maximus luctus ut a justo. In ullamcorper placerat lorem, vel efficitur tortor ultrices non. Aliquam nibh nisl, sodales non congue ac, hendrerit vel dolor.

Duis iaculis ligula vel ex tristique sagittis. Suspendisse id vehicula arcu, a bibendum metus. Pellentesque congue metus quis sem fringilla imperdiet. Maecenas fermentum congue nunc, non bibendum nulla vulputate ut. Donec porta, velit vel interdum elementum, turpis nibh pretium ligula, vitae finibus nulla dui at est. Aliquam augue diam, imperdiet quis vulputate eget, posuere quis lorem. Proin eu augue in neque hendrerit lacinia. Curabitur id maximus ante, et aliquam turpis. Ut condimentum sapien id dictum pretium. Fusce condimentum sapien lectus, eget feugiat ex aliquam ut. Suspendisse eu rutrum nisi, tincidunt mollis arcu. Aliquam quis odio ut nisi porta suscipit. Pellentesque quis convallis enim, vel scelerisque odio. Integer vestibulum elit id lectus interdum laoreet. Aliquam nunc metus, vulputate a velit nec, aliquam venenatis turpis. Sed ultrices magna aliquet elementum varius.

Donec justo dolor, tincidunt vitae faucibus a, tincidunt vel nunc. Sed vulputate massa felis, non commodo leo maximus eget. Vivamus congue eros non nisl ornare tempor. Suspendisse pretium, sapien non dignissim vehicula, neque orci ornare arcu, ut finibus libero libero id nulla. Ut id sodales tellus. Donec ultricies enim nulla, in elementum quam auctor quis. Aliquam id lacus et orci pulvinar rutrum eget id augue. Phasellus eros arcu, feugiat nec purus in, pharetra interdum est. Sed quis feugiat libero, a venenatis metus.

Integer justo tellus, auctor nec faucibus eu, faucibus vitae nibh. Donec lorem purus, lacinia feugiat suscipit eget, convallis ac justo. Maecenas dignissim dolor nec malesuada finibus. Fusce id congue sapien. Nam aliquam nibh sed odio iaculis aliquet. Donec aliquet nibh at turpis tincidunt placerat. Cras euismod commodo nibh, in tincidunt velit molestie nec. Pellentesque convallis tellus sit amet sagittis hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Sed finibus vulputate arcu, eu posuere purus porta sed. Curabitur pellentesque accumsan sodales. Ut congue lacinia felis a semper. Sed quis mauris tempus, ullamcorper ipsum vestibulum, iaculis lectus. Suspendisse dignissim nibh id interdum dictum. Donec at aliquam orci. Curabitur faucibus massa ut tortor varius, vel blandit lorem vulputate. Praesent sit amet blandit massa. Donec vitae tellus felis. Nullam hendrerit tristique odio, vitae imperdiet magna fringilla sit amet. Phasellus ultrices dolor nisl, nec tempus felis accumsan vitae.

Proin vestibulum dignissim venenatis. Nullam nec malesuada est, eget aliquam nibh. Nullam posuere at leo at dictum. Sed ligula tortor, pellentesque eget purus vel, tempor varius ligula. Fusce mattis nec diam at fermentum. Curabitur quis mattis urna. Sed sed augue sit amet orci feugiat feugiat. Nulla quis eros molestie sapien tristique sodales id ut arcu. Proin luctus augue non bibendum placerat. Duis sapien tortor, rhoncus at lectus vel, aliquet gravida ligula. Nulla gravida faucibus fermentum. Vivamus faucibus leo nisi. Morbi eu posuere massa, sit amet auctor augue. Vivamus fermentum lobortis leo, ut posuere magna finibus non. Nunc a elit tristique, maximus massa a, dapibus erat. Cras egestas dictum accumsan.

Curabitur sed nunc risus. Donec ut elit a magna feugiat dictum. Etiam tincidunt magna at mi maximus, non condimentum orci dapibus. Ut volutpat, nisl in bibendum faucibus, nulla dolor commodo sem, vel laoreet elit magna id lectus. Duis vitae elementum libero. Curabitur at tellus sit amet odio semper porta. Curabitur suscipit egestas fringilla.

Mauris dolor risus, elementum dictum velit vel, eleifend ultrices ligula. Curabitur et ante tristique, tincidunt metus non, congue mi. Nulla at aliquet enim. Fusce molestie luctus lacus, id molestie risus vulputate iaculis. Nam hendrerit lectus ac sem lacinia, nec viverra justo porttitor. Etiam sit amet pretium risus. Etiam elementum ultrices tortor, vel auctor libero varius in. Pellentesque ante ligula, maximus id neque eget, lacinia sodales diam. Vestibulum diam sem, ultricies sit amet sodales sed, faucibus sed odio. Phasellus sit amet justo neque. Sed tincidunt nibh ante. In lorem ex, posuere a elit et, egestas aliquet velit. Etiam interdum magna quis gravida egestas.

Aenean vitae justo euismod, mollis enim at, sagittis lectus. Duis elementum, erat ut consectetur egestas, ipsum velit vehicula urna, eu hendrerit eros ex vitae dui. Duis ex lorem, viverra in mattis ut, lobortis a est. Maecenas vitae blandit neque. Vivamus blandit augue mollis lorem vehicula elementum. In ac dapibus tortor, non luctus leo. Pellentesque malesuada tempus ante, eu condimentum purus tempus eu. Sed auctor vestibulum urna, fermentum pharetra enim dignissim id. In vestibulum, nisi sed rhoncus pretium, ipsum ex mollis dui, ut sagittis turpis velit at risus. Ut libero orci, ullamcorper sit amet fermentum quis, euismod in nulla. Ut sodales ultricies velit a scelerisque. Praesent mattis tellus vel eros faucibus, ut efficitur magna porta. Aliquam est velit, rutrum et ultricies sed, consectetur non ex. Maecenas viverra massa nisi, id pharetra diam pretium facilisis. Nunc in molestie massa.
            </div>
            
        </div>
    );
}
