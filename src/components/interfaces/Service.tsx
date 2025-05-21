import {
    CheckCircle,
    ArrowRight,
    Projector,
    Volume2,
    Croissant,
    Car,
    PartyPopper,
    GraduationCap,
    AudioLines,
    ChefHat,
    Armchair,
    Wine,
    Paintbrush,
    Headphones,
    Lamp,
    Clapperboard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DigitalExperienceSection() {
    return (
        <section id="Servicio" className="py-12 md:py-32">
            <div className="relative container mx-auto">
                <div className="absolute bottom-auto -z-10 left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[60%] translate-y-[25%] rounded-full bg-[rgb(63,118,235)] opacity-50 blur-[80px]"></div>

                <div className="mx-auto flex max-w-screen-md flex-col items-center gap-6 px-2">
                    <h2 className="text-center text-3xl font-semibold lg:text-5xl">
                        Nuestros Servicios para mejorar tu experiencia
                    </h2>
                    <p className="text-center text-balance text-zinc-300 lg:text-xl">
                        Ofrecemos un espacio versátil y adaptado a tus
                        necesidades. Ya sea para una jornada formal o una
                        celebración, contamos con un salón equipado con:
                    </p>
                </div>

                <div className="mt-12">
                    <Tabs
                        defaultValue="empresas"
                        className="mx-auto flex w-fit flex-col items-center gap-8 md:gap-12"
                    >
                        <TabsList className="bg-muted/45 sticky z-50 top-20 backdrop-blur-3xl text-muted-foreground w-fit items-center justify-center rounded-lg flex h-auto gap-x-1 p-1 md:p-2 md:gap-x-2">
                            <TabsTrigger
                                value="matrimonios"
                                className="text-xs hover:bg-white md:text-base px-1 md:px-2"
                            >
                                Matrimonios
                            </TabsTrigger>
                            <TabsTrigger
                                value="graduaciones"
                                className="text-xs hover:bg-white md:text-base px-1"
                            >
                                Graduaciones
                            </TabsTrigger>
                            <TabsTrigger
                                value="cumpleaños"
                                className="text-xs hover:bg-white md:text-base px-1"
                            >
                                Cumpleaños
                            </TabsTrigger>
                            <TabsTrigger
                                value="empresas"
                                className="text-xs hover:bg-white md:text-base px-1"
                            >
                                Empresas
                            </TabsTrigger>
                            <TabsTrigger
                                value="otros"
                                className="text-xs hover:bg-white md:text-base px-1"
                            >
                                Otros
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent
                            value="matrimonios"
                            className="flex-1 outline-none max-w-screen-xl px-2"
                        >
                            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
                                <div>
                                    <h3 className="mb-4 text-2xl font-semibold lg:text-4xl">
                                        Matrimonios y Celebraciones
                                    </h3>
                                    <p className="text-zinc-300 lg:text-xl">
                                        Nuestro Objetivo es que tu matrimonio
                                        sea un momento único y especial, para
                                        eso contamos con la colaboración de los
                                        mejores profesionales que harán que tu
                                        boda sea inolvidable.
                                    </p>
                                    <ul className="mt-8 grid grid-cols-1 gap-2 lg:grid-cols-2">
                                        <li className="flex items-center gap-2">
                                            <Headphones className="w-6" />
                                            <span className="font-medium">
                                                DJ y sonido ambiental
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Lamp className="w-6" />
                                            <span className="font-medium">
                                                Iluminación decorativa
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Clapperboard className="w-6" />
                                            <span className="font-medium">
                                                Pantallas y proyección
                                                multimedia
                                            </span>
                                        </li>
                                    </ul>
                                    <p className="mt-8 text-zinc-200 italic">
                                        Un ambiente relajado y profesional para
                                        que tu evento empresarial sea un éxito.
                                    </p>
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="mt-8 gap-1.5 text-black"
                                    >
                                        <a
                                            href="https://api.whatsapp.com/send?phone=56969175107&text=Hola%20quiero%20hacer%20una%20reserva.%20Me%20interesa%20el%20servicio%20de%20Producción%20técnica%20y%20audiovisual"
                                            target="_blank"
                                        >
                                            Conocer más
                                            <span className="hidden md:inline">
                                                sobre nuestros servicios
                                            </span>
                                            <ArrowRight className="w-4" />
                                        </a>
                                    </Button>
                                </div>
                                <img
                                    alt="Foto de Producción técnica y audiovisual"
                                    className="order-first max-h-[400px] w-full rounded-lg object-cover md:order-last"
                                    src="/images/service/PORTADA PRINCIPAL (1).avif"
                                    width={610}
                                    height={400}
                                    decoding="async"
                                    loading="lazy"
                                />
                            </div>
                        </TabsContent>

                        <TabsContent
                            value="graduaciones"
                            className="flex-1 outline-none max-w-screen-xl px-2"
                        >
                            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
                                <div>
                                    <h3 className="mb-4 text-2xl font-semibold lg:text-4xl">
                                        Graduaciones y Fiestas Escolares
                                    </h3>
                                    <p className="text-zinc-300 lg:text-xl">
                                        Celebra tu graduación con estilo y sin
                                        preocupaciones, sea Octavo básico o tu
                                        salida de cuarto medio te ofrecemos todo
                                        lo que necesitas para un evento perfecto
                                        e inolvidable.
                                    </p>
                                    <ul className="mt-8 grid grid-cols-1 gap-2 lg:grid-cols-2">
                                        <li className="flex items-center gap-2">
                                            <PartyPopper className="w-6" />
                                            <span className="font-medium">
                                                Área de recepción decorada
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <GraduationCap className="w-6" />
                                            <span className="font-medium">
                                                Espacio para discursos y
                                                entregas
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <AudioLines className="w-6" />
                                            <span className="font-medium">
                                                Iluminación y sonido profesional
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <ChefHat className="w-6" />
                                            <span className="font-medium">
                                                Servicio opcional de catering
                                            </span>
                                        </li>
                                    </ul>
                                    <p className="mt-8 text-zinc-200 italic">
                                        Haz que ese momento tan esperado se
                                        recuerde por siempre.
                                    </p>
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="mt-8 gap-1.5 text-black"
                                    >
                                        <a
                                            href="https://api.whatsapp.com/send?phone=56969175107&text=Hola%20quiero%20hacer%20una%20reserva.%20Me%20interesa%20el%20servicio%20de%20Licenciaturas%20y%20Fiestas%20Escolares"
                                            target="_blank"
                                        >
                                            Conocer más
                                            <span className="hidden md:inline">
                                                sobre nuestros servicios
                                            </span>
                                            <ArrowRight className="w-4" />
                                        </a>
                                    </Button>
                                </div>
                                <img
                                    alt="Foto de Licenciaturas y Fiestas Escolares"
                                    className="order-first max-h-[400px] w-full rounded-lg object-cover md:order-last"
                                    src="/images/service/Fotos Oficiales-255.avif"
                                    width={610}
                                    height={400}
                                    decoding="async"
                                    loading="lazy"
                                />
                            </div>
                        </TabsContent>

                        <TabsContent
                            value="cumpleaños"
                            className="flex-1 outline-none max-w-screen-xl px-2"
                        >
                            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
                                <div>
                                    <h3 className="mb-4 text-2xl font-semibold lg:text-4xl">
                                        Cumpleaños
                                    </h3>
                                    <p className="text-zinc-300 lg:text-xl">
                                        Piensas en celebrar tu cumpleaños o el
                                        de tu hijo, contamos con las
                                        instalaciones necesarias para que todos
                                        los miembros de tu familia y amigos
                                        disfruten como corresponde en ese día
                                        tan especial.
                                    </p>
                                    <ul className="mt-8 grid grid-cols-1 gap-2 lg:grid-cols-2">
                                        <li className="flex items-center gap-2">
                                            <Armchair className="w-6" />
                                            <span className="font-medium">
                                                Sillas Chiavari
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <CheckCircle className="w-6" />
                                            <span className="font-medium">
                                                Mesas redondas o rectangulares
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Wine className="w-6" />
                                            <span className="font-medium">
                                                Vajilla, cristalería, mantelería
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Paintbrush className="w-6" />
                                            <span className="font-medium">
                                                Decoración personalizada por
                                                evento
                                            </span>
                                        </li>
                                    </ul>
                                    <p className="mt-8 text-zinc-200 italic">
                                        Un espacio versátil y adaptado a tus
                                        necesidades.
                                    </p>
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="mt-8 gap-1.5 text-black"
                                    >
                                        <a
                                            href="https://api.whatsapp.com/send?phone=56969175107&text=Hola%20quiero%20hacer%20una%20reserva.%20Me%20interesa%20el%20servicio%20de%20Arriendo%20de%20implementación"
                                            target="_blank"
                                        >
                                            Conocer más
                                            <span className="hidden md:inline">
                                                sobre nuestros servicios
                                            </span>
                                            <ArrowRight className="w-4" />
                                        </a>
                                    </Button>
                                </div>
                                <img
                                    alt="Foto de eventos particulares"
                                    className="order-first max-h-[400px] w-full rounded-lg object-cover md:order-last"
                                    src="/images/service/Fotos Oficiales-504.avif"
                                    width={610}
                                    height={400}
                                    decoding="async"
                                    loading="lazy"
                                />
                            </div>
                        </TabsContent>

                        <TabsContent
                            value="empresas"
                            className="flex-1 outline-none max-w-screen-xl px-2"
                        >
                            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
                                <div>
                                    <h3 className="mb-4 text-2xl font-semibold lg:text-4xl">
                                        Eventos de Empresas y Celebraciones
                                        Corporativas
                                    </h3>
                                    <p className="text-zinc-300 lg:text-xl">
                                        Nuestro Objetivo es que tu matrimonio
                                        sea un momento único y especial, para
                                        eso contamos con la colaboración de los
                                        mejores profesionales que harán que tu
                                        boda sea inolvidable.
                                    </p>
                                    <ul className="mt-8 grid grid-cols-1 gap-2 lg:grid-cols-2">
                                        <li className="flex items-center gap-2">
                                            <Projector className="w-6" />
                                            <span className="font-medium">
                                                Proyector multimedia
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Volume2 className="w-6" />
                                            <span className="font-medium">
                                                Amplificación de sonido
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Croissant className="w-6" />
                                            <span className="font-medium">
                                                Servicio de coffee break o
                                                banquetería
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Car className="w-6" />
                                            <span className="font-medium">
                                                Estacionamiento privado y seguro
                                            </span>
                                        </li>
                                    </ul>
                                    <p className="mt-8 text-zinc-200 italic">
                                        Un ambiente relajado y profesional para
                                        que tu evento empresarial sea un éxito.
                                    </p>
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="mt-8 gap-1.5 text-black"
                                    >
                                        <a
                                            href="https://api.whatsapp.com/send?phone=56969175107&text=Hola%20quiero%20hacer%20una%20reserva.%20Me%20interesa%20el%20servicio%20de%20Eventos%20de%20Empresas%20y%20Celebraciones%20Corporativas"
                                            target="_blank"
                                        >
                                            Conocer más
                                            <span className="hidden md:inline">
                                                sobre nuestros servicios
                                            </span>
                                            <ArrowRight className="w-4" />
                                        </a>
                                    </Button>
                                </div>
                                <img
                                    alt="Foto de Eventos de Empresas y Celebraciones Corporativas"
                                    className="order-first max-h-[400px] w-full rounded-lg object-cover md:order-last"
                                    src="/images/service/Fotografías Oficiales-214.avif"
                                    width={610}
                                    height={400}
                                    decoding="async"
                                    loading="lazy"
                                />
                            </div>
                        </TabsContent>
                        <TabsContent
                            value="otros"
                            className="flex-1 outline-none max-w-screen-xl px-2"
                        >
                            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
                                <div className="flex flex-col items-start mb-auto md:mt-10">
                                    <h3 className="mb-4 text-2xl font-semibold lg:text-4xl">
                                        Otros Eventos
                                    </h3>
                                    <p className="text-zinc-300 lg:text-xl">
                                        ¿Tienes una idea de evento?, llámanos o
                                        escríbenos para hacer tu idea realidad.
                                    </p>
                                    {/* <ul className="mt-8 grid grid-cols-1 gap-2 lg:grid-cols-2">
                                        <li className="flex items-center gap-2">
                                            <Projector className="w-6" />
                                            <span className="font-medium">
                                                Proyector multimedia
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Volume2 className="w-6" />
                                            <span className="font-medium">
                                                Amplificación de sonido
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Croissant className="w-6" />
                                            <span className="font-medium">
                                                Servicio de coffee break o
                                                banquetería
                                            </span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Car className="w-6" />
                                            <span className="font-medium">
                                                Estacionamiento privado y seguro
                                            </span>
                                        </li>
                                    </ul>
                                    <p className="mt-8 text-zinc-200 italic">
                                        Un ambiente relajado y profesional para
                                        que tu evento empresarial sea un éxito.
                                    </p> */}
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="mt-8 gap-1.5 text-black"
                                    >
                                        <a
                                            href="https://api.whatsapp.com/send?phone=56969175107&text=Hola%20quiero%20hacer%20una%20reserva.%20Me%20interesa%20el%20servicio%20de%20Eventos%20de%20Empresas%20y%20Celebraciones%20Corporativas"
                                            target="_blank"
                                        >
                                            Conocer más
                                            <span className="hidden md:inline">
                                                sobre nuestros servicios
                                            </span>
                                            <ArrowRight className="w-4" />
                                        </a>
                                    </Button>
                                </div>
                                <img
                                    alt="Foto de Eventos de Empresas y Celebraciones Corporativas"
                                    className="order-first max-h-[400px] w-full rounded-lg object-contain bg-white py-2.5 md:order-last"
                                    src="/images/service/Aniversario ADM1.avif"
                                    width={500}
                                    height={500}
                                    decoding="async"
                                    loading="lazy"
                                />
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </section>
    );
}
