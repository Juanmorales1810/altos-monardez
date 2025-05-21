"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, LoaderCircle, Send } from "lucide-react";

// Esquema de validación con zod
const formSchema = z.object({
    firstname: z
        .string()
        .min(2, { message: "First name must be at least 2 characters" }),
    lastname: z
        .string()
        .min(2, { message: "Last name must be at least 2 characters" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    message: z
        .string()
        .min(10, { message: "Message must be at least 10 characters" }),
    eventType: z.string().min(1, { message: "Please select an event type" }),
    eventDate: z.string().min(1, { message: "Please select an event date" }),
    attendees: z.coerce
        .number()
        .int()
        .positive()
        .min(1, { message: "Number of attendees must be at least 1" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactFormFields() {
    const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            email: "",
            message: "",
            eventType: "",
            eventDate: "",
            attendees: 1,
        },
    });

    const onSubmit = async (data: FormValues) => {
        try {
            // Simular envío a un servidor (aquí puedes implementar tu lógica real)
            console.log("Form data:", data);
            await new Promise((resolve) => setTimeout(resolve, 1000)); // Simular delay de red

            // Mostrar mensaje de éxito y resetear formulario
            setIsSubmitSuccessful(true);
            reset();

            // Ocultar el mensaje después de 5 segundos
            setTimeout(() => {
                setIsSubmitSuccessful(false);
            }, 5000);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            {isSubmitSuccessful && (
                <Alert className="bg-green-50 border-green-200">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-600">
                        Tu mensaje ha sido enviado con éxito. Nos pondremos en
                        contacto contigo pronto.
                    </AlertDescription>
                </Alert>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="firstname">Nombre</Label>
                    <Input
                        id="firstname"
                        placeholder="Nombre"
                        {...register("firstname")}
                        className="bg-white/70 backdrop-blur-2xl text-black"
                        aria-invalid={errors.firstname ? "true" : "false"}
                    />
                    {errors.firstname && (
                        <p className="text-sm text-red-500">
                            {errors.firstname.message}
                        </p>
                    )}
                </div>
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="lastname">Apellido</Label>
                    <Input
                        id="lastname"
                        placeholder="Apellido"
                        className="bg-white/70 backdrop-blur-2xl text-black"
                        {...register("lastname")}
                        aria-invalid={errors.lastname ? "true" : "false"}
                    />
                    {errors.lastname && (
                        <p className="text-sm text-red-500">
                            {errors.lastname.message}
                        </p>
                    )}
                </div>
            </div>

            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                    type="email"
                    id="email"
                    placeholder="Ingresa tu email"
                    className="bg-white/70 backdrop-blur-2xl text-black"
                    {...register("email")}
                    aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                    <p className="text-sm text-red-500">
                        {errors.email.message}
                    </p>
                )}
            </div>

            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="eventType">Tipo de evento</Label>
                <Select
                    onValueChange={(value) => {
                        // Necesario para integrar Select de shadcn con react-hook-form
                        const event = { target: { name: "eventType", value } };
                        register("eventType").onChange(event as any);
                    }}
                >
                    <SelectTrigger
                        className="w-full bg-white/70 backdrop-blur-2xl text-black"
                        id="eventType"
                    >
                        <SelectValue placeholder="Selecciona un tipo de evento" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="matrimonio">Matrimonios</SelectItem>
                        <SelectItem value="graduaciones">
                            Graduaciones
                        </SelectItem>
                        <SelectItem value="cumpleanos">Cumpleaños</SelectItem>
                        <SelectItem value="empresas">Empresas</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                </Select>
                {errors.eventType && (
                    <p className="text-sm text-red-500">
                        {errors.eventType.message}
                    </p>
                )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="eventDate">Fecha del evento</Label>
                    <Input
                        type="date"
                        id="eventDate"
                        className="bg-white/70 backdrop-blur-2xl text-black"
                        {...register("eventDate")}
                        aria-invalid={errors.eventDate ? "true" : "false"}
                    />
                    {errors.eventDate && (
                        <p className="text-sm text-red-500">
                            {errors.eventDate.message}
                        </p>
                    )}
                </div>

                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="attendees">Numero de asistentes</Label>
                    <Input
                        type="number"
                        id="attendees"
                        min="1"
                        className="bg-white/70 backdrop-blur-2xl text-black"
                        {...register("attendees")}
                        aria-invalid={errors.attendees ? "true" : "false"}
                    />
                    {errors.attendees && (
                        <p className="text-sm text-red-500">
                            {errors.attendees.message}
                        </p>
                    )}
                </div>
            </div>

            <div className="grid w-full gap-1.5">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                    id="message"
                    placeholder="Escribe tu mensaje aquí..."
                    className="min-h-32 bg-white/70 backdrop-blur-2xl text-black"
                    {...register("message")}
                    aria-invalid={errors.message ? "true" : "false"}
                />
                {errors.message && (
                    <p className="text-sm text-red-500">
                        {errors.message.message}
                    </p>
                )}
            </div>

            <Button
                variant="secondary"
                type="submit"
                className="w-full"
                disabled={isSubmitting}
            >
                {isSubmitting ? (
                    <>
                        Enviando...{" "}
                        <LoaderCircle className="animate-spin ease-in-out" />{" "}
                    </>
                ) : (
                    <>
                        Enviar mensaje
                        <Send className="h-4 w-4 ml-2" />{" "}
                    </>
                )}
            </Button>
        </form>
    );
}
