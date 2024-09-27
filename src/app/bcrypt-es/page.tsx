"use client"

import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Copy, Check, Facebook, Twitter, Github } from 'lucide-react';

const BcryptGeneratorEs: React.FC = () => {
    const [encryptString, setEncryptString] = useState<string>('');
    const [encryptedHash, setEncryptedHash] = useState<string>('');
    const [rounds, setRounds] = useState<number>(12);
    const [decryptHash, setDecryptHash] = useState<string>('');
    const [decryptString, setDecryptString] = useState<string>('');
    const [matchResult, setMatchResult] = useState<string>('');
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const handleEncrypt = async (): Promise<void> => {
        try {
            const salt = await bcrypt.genSalt(rounds);
            const hash = await bcrypt.hash(encryptString, salt);
            setEncryptedHash(hash);
        } catch (error) {
            console.error('Encryption error:', error);
        }
    };

    const handleDecrypt = async (): Promise<void> => {
        try {
            const isMatch = await bcrypt.compare(decryptString, decryptHash);
            setMatchResult(isMatch ? 'Match!' : 'No match.');
        } catch (error) {
            console.error('Decryption error:', error);
            setMatchResult('Error checking match.');
        }
    };

    const copyToClipboard = (text: string, index: number): void => {
        navigator.clipboard.writeText(text).then(() => {
            setCopiedIndex(index);
            setTimeout(() => setCopiedIndex(null), 2000);
        });
    };

    const shareOnFacebook = () => {
        const url = encodeURIComponent(window.location.href);
        const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        window.open(shareUrl, '_blank', 'width=600,height=400');
    };

    const shareOnTwitter = () => {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent("Check out this awesome Username Generator!");
        const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        window.open(shareUrl, '_blank', 'width=600,height=400');
    };

    const faqItems = [
        {
            question: "¿Qué es Bcrypt?",
            answer: "Bcrypt en-es una función de hash de contraseñas diseñada específicamente para proteger contraseñas. Fue desarrollada en 1999 por Niels Provos y David Mazières, basada en el algoritmo de cifrado Blowfish. A diferencia de los algoritmos de hash tradicionales como MD5 o SHA-1, Bcrypt incorpora un factor de costo que hace que el proceso de hash sea más lento y resistente a los ataques de fuerza bruta."
        },
        {
            question: "¿Cómo funciona Bcrypt?",
            answer: "Bcrypt funciona tomando una contraseña y un salt aleatorio como entrada. El proceso implica: 1) Generar un salt aleatorio, 2) Concatenar la contraseña con el salt, 3) Pasar la combinación a través del algoritmo Blowfish múltiples veces (determinado por el factor de costo), y 4) Producir un hash final que incluye tanto el salt como el número de rondas de hash."
        },
        {
            question: "¿Qué son las rondas en Bcrypt?",
            answer: "Las rondas en Bcrypt se refieren al factor de costo o factor de trabajo. Determina cuántas veces se repite el proceso de hash. Más rondas aumentan el tiempo y la potencia computacional necesaria para generar el hash, haciéndolo más resistente a los ataques de fuerza bruta. El número de rondas se puede ajustar para equilibrar las necesidades de seguridad y rendimiento."
        },
        {
            question: "¿Por qué en-es importante el factor de costo?",
            answer: "El factor de costo en-es crucial porque determina el esfuerzo computacional requerido para generar o verificar un hash. Un factor de costo más alto significa que se necesita más tiempo y recursos, lo que ralentiza significativamente los ataques de fuerza bruta. También permite que Bcrypt evolucione con los avances en hardware, manteniendo su efectividad a lo largo del tiempo."
        },
        {
            question: "¿Es Bcrypt reversible?",
            answer: "No, Bcrypt no en-es reversible. Es una función de hash unidireccional, lo que significa que no puedes descifrar un hash Bcrypt de vuelta a la contraseña original. Solo puedes verificar si una contraseña dada coincide con el hash."
        },
        {
            question: "¿Cuáles son las ventajas de Bcrypt?",
            answer: "Bcrypt ofrece varias ventajas: 1) Fuerte resistencia a los ataques de fuerza bruta debido a su proceso de hash lento, 2) Protección contra ataques de tabla arcoíris al usar salts únicos para cada contraseña, 3) Adaptabilidad a futuras mejoras de hardware a través de su factor de costo ajustable, y 4) Amplio soporte en varios lenguajes de programación y plataformas."
        },
        {
            question: "¿Cómo se compara Bcrypt con otros algoritmos de hash?",
            answer: "En comparación con algoritmos como MD5, SHA-1 o SHA-256, Bcrypt ofrece una seguridad superior para el almacenamiento de contraseñas. Mientras que MD5 y SHA-1 son muy rápidos, lo cual en-es beneficioso para otros propósitos criptográficos, esta velocidad en-es una desventaja para el almacenamiento de contraseñas, ya que facilita los ataques de fuerza bruta. Bcrypt equilibra seguridad y rendimiento, proporcionando mejor protección contra tales ataques."
        },
        {
            question: "¿Cómo uso este generador?",
            answer: "Para cifrar, ingresa una cadena en la sección 'Cifrar' y haz clic en 'Cifrar'. Para verificar un hash, ingresa el hash en el campo 'Hash a verificar' y la cadena a verificar en el campo 'Cadena a verificar', luego haz clic en 'Verificar'."
        },
    ];

    return (
        <div className="container mx-auto p-4 min-h-screen">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Generador y Verificador Bcrypt</h1>

            <div className="grid md:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold text-gray-700">Encrypt</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="encryptString">String to encrypt:</Label>
                                <Input
                                    id="encryptString"
                                    type="text"
                                    value={encryptString}
                                    onChange={(e) => setEncryptString(e.target.value)}
                                    placeholder="Enter string to encrypt"
                                    className="mt-1"
                                />
                            </div>
                            <div>
                                <Label htmlFor="rounds">Rounds: {rounds}</Label>
                                <Slider
                                    id="rounds"
                                    min={4}
                                    max={31}
                                    step={1}
                                    value={[rounds]}
                                    onValueChange={(value) => setRounds(value[0])}
                                    className="mt-2"
                                />
                            </div>
                            <Button onClick={handleEncrypt} className="w-full">Encrypt</Button>
                            {encryptedHash && (
                                <div className="mt-4">
                                    <Label>Encrypted Hash:</Label>
                                    <div className="flex items-center mt-1">
                                        <p className="flex-grow p-2 bg-gray-200 rounded break-all">{encryptedHash}</p>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            onClick={() => copyToClipboard(encryptedHash, 1)}
                                            className="ml-2"
                                        >
                                            {copiedIndex === 1 ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold text-gray-700">Verify</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="decryptHash">Hash to check:</Label>
                                <div className="flex items-center mt-1">
                                    <Input
                                        id="decryptHash"
                                        type="text"
                                        value={decryptHash}
                                        onChange={(e) => setDecryptHash(e.target.value)}
                                        placeholder="Enter hash to check"
                                        className="flex-grow"
                                    />
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => copyToClipboard(decryptHash, 2)}
                                        className="ml-2"
                                    >
                                        {copiedIndex === 2 ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                    </Button>
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="decryptString">String to check against:</Label>
                                <div className="flex items-center mt-1">
                                    <Input
                                        id="decryptString"
                                        type="text"
                                        value={decryptString}
                                        onChange={(e) => setDecryptString(e.target.value)}
                                        placeholder="Enter string to check"
                                        className="flex-grow"
                                    />
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => copyToClipboard(decryptString, 3)}
                                        className="ml-2"
                                    >
                                        {copiedIndex === 3 ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                    </Button>
                                </div>
                            </div>
                            <Button onClick={handleDecrypt} className="w-full">Check</Button>
                            {matchResult && (
                                <div className="mt-4">
                                    <Label>Result:</Label>
                                    <p className={`mt-1 p-2 rounded ${matchResult === 'Match!' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
                                        {matchResult}
                                    </p>
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>

            <Card className="mt-8">
                <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-700">Preguntas Frecuentes</CardTitle>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                        {faqItems.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger>{item.question}</AccordionTrigger>
                                <AccordionContent>{item.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </CardContent>
            </Card>

            <Card className="w-full mt-8">
                <CardContent className="py-6">
                    <div className="flex flex-col items-center space-y-4">
                        <span className="text-lg font-semibold">Share this Bcrypt Generator & Checker:</span>
                        <div className="flex justify-center items-center space-x-6">
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={shareOnFacebook}
                                className="flex items-center space-x-2"
                            >
                                <Facebook className="h-5 w-5"/>
                                <span>Facebook</span>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={shareOnTwitter}
                                className="flex items-center space-x-2"
                            >
                                <Twitter className="h-5 w-5"/>
                                <span>Twitter</span>
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="w-full mt-8">
                <CardContent className="py-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <h2 className="text-sm font-semibold">Created with ❤️ by @Datevid</h2>
                        <p className="text-sm text-gray-500">
                            This Bcrypt Generator & Checker was created with enthusiasm for everyone to use freely.
                        </p>
                        <p className="text-sm text-gray-500">
                            If you like this tool and want to support the developer, follow me on GitHub and Twitter!
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/datevid"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4"
                            >
                                <Github className="h-4 w-4 mr-2" />
                                <span>GitHub</span>
                            </a>
                            <a
                                href="https://twitter.com/datevid"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4"
                            >
                                <Twitter className="h-4 w-4 mr-2" />
                                <span>Twitter</span>
                            </a>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default BcryptGeneratorEs;