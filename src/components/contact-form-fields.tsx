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
import { CheckCircle } from "lucide-react";

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
                        Your message has been sent successfully!
                    </AlertDescription>
                </Alert>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="firstname">First Name</Label>
                    <Input
                        id="firstname"
                        placeholder="First Name"
                        {...register("firstname")}
                        aria-invalid={errors.firstname ? "true" : "false"}
                    />
                    {errors.firstname && (
                        <p className="text-sm text-red-500">
                            {errors.firstname.message}
                        </p>
                    )}
                </div>
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="lastname">Last Name</Label>
                    <Input
                        id="lastname"
                        placeholder="Last Name"
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
                    placeholder="Email"
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
                <Label htmlFor="eventType">Event Type</Label>
                <Select
                    className="w-full"
                    onValueChange={(value) => {
                        // Necesario para integrar Select de shadcn con react-hook-form
                        const event = { target: { name: "eventType", value } };
                        register("eventType").onChange(event as any);
                    }}
                >
                    <SelectTrigger className="w-full" id="eventType">
                        <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="corporate">
                            Corporate Event
                        </SelectItem>
                        <SelectItem value="birthday">Birthday Party</SelectItem>
                        <SelectItem value="conference">Conference</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
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
                    <Label htmlFor="eventDate">Event Date</Label>
                    <Input
                        type="date"
                        id="eventDate"
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
                    <Label htmlFor="attendees">Number of Attendees</Label>
                    <Input
                        type="number"
                        id="attendees"
                        min="1"
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
                <Label htmlFor="message">Message</Label>
                <Textarea
                    id="message"
                    placeholder="Type your message here."
                    className="min-h-32"
                    {...register("message")}
                    aria-invalid={errors.message ? "true" : "false"}
                />
                {errors.message && (
                    <p className="text-sm text-red-500">
                        {errors.message.message}
                    </p>
                )}
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
        </form>
    );
}
