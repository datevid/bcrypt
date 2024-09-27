"use client"

import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {ExternalLink, Facebook, Github, Twitter} from 'lucide-react'
import {Button} from "@/components/ui/button";

const BcryptDefinition = () => {

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

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-bold">¿Qué es Bcrypt?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <p className="text-lg">
                    <strong>Bcrypt</strong> es una función de hash diseñada específicamente para proteger contraseñas. Desarrollada en 1999 por Niels Provos y David Mazières, está basada en el algoritmo de cifrado Blowfish. A diferencia de algoritmos más tradicionales como MD5 o SHA-1, Bcrypt incorpora un factor de coste que hace el proceso de generación del hash más lento y resistente a ataques de fuerza bruta.
                </p>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">¿Cómo funciona Bcrypt?</h2>
                    <p className="mb-4">
                        Bcrypt toma como entrada una contraseña y un valor adicional llamado sal (salt). El sal es un conjunto de datos aleatorios que se genera para cada contraseña antes de aplicar el algoritmo de hash.
                    </p>
                    <p className="mb-2">El proceso de Bcrypt se desglosa en:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Generación del Sal:</strong> Se genera un valor de sal aleatorio.</li>
                        <li><strong>Concatenación:</strong> La contraseña se concatena con el sal.</li>
                        <li><strong>Hashing:</strong> La combinación pasa por el algoritmo de Blowfish en múltiples rondas.</li>
                        <li><strong>Resultado:</strong> El hash final incluye el sal y el número de rondas.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">¿Por qué es importante el factor de coste?</h2>
                    <p>
                        El factor de coste determina cuántas veces se repite el proceso de hashing, aumentando la dificultad para realizar un ataque de fuerza bruta. A mayor factor de coste, más tiempo y recursos computacionales se requieren para generar o verificar un hash.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">Ventajas de Bcrypt</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Resistencia a ataques de fuerza bruta:</strong> Diseñado para ser lento y consumir más recursos.</li>
                        <li><strong>Protección contra ataques de sal duplicados:</strong> Utiliza un sal único para cada contraseña.</li>
                        <li><strong>Actualización continua:</strong> Factor de coste ajustable para evolucionar con los avances en hardware.</li>
                        <li><strong>Amplio soporte:</strong> Implementación fácil en una variedad de entornos.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3">Comparación con otros algoritmos de hash</h2>
                    <p>
                        Comparado con MD5, SHA-1 o SHA-256, Bcrypt ofrece mayor seguridad debido a su diseño orientado a proteger contraseñas. Mientras que MD5 y SHA-1 son extremadamente rápidos, Bcrypt equilibra seguridad y rendimiento, ofreciendo protección superior contra ataques de fuerza bruta.
                    </p>
                </section>

                <Alert>
                    <AlertTitle>Nota importante</AlertTitle>
                    <AlertDescription>
                        Bcrypt se ha convertido en un estándar de facto para la protección de contraseñas. Implementarlo en aplicaciones donde se manejan contraseñas es esencial para asegurar que los datos de los usuarios estén protegidos de posibles brechas de seguridad.
                    </AlertDescription>
                </Alert>

                <Card className="w-full">
                    <CardContent className="py-6">
                        <div className="flex flex-col items-center space-y-4">
                            <span className="text-lg font-semibold">Comparte esta definición de Bcrypt:</span>
                            <div className="flex justify-center items-center space-x-6">
                                <Button
                                    variant="outline"
                                    size="lg"
                                    onClick={shareOnFacebook}
                                    className="flex items-center space-x-2"
                                >
                                    <Facebook className="h-5 w-5" />
                                    <span>Facebook</span>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    onClick={shareOnTwitter}
                                    className="flex items-center space-x-2"
                                >
                                    <Twitter className="h-5 w-5" />
                                    <span>Twitter</span>
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="w-full">
                    <CardContent className="py-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <h2 className="text-sm font-semibold">Creado con ❤️ por @Datevid</h2>
                            <p className="text-sm text-gray-500">
                                Esta definición de Bcrypt fue creada con mucho entusiasmo para que todos puedan aprender sobre seguridad de contraseñas.
                            </p>
                            <p className="text-sm text-gray-500">
                                Si te gusta este contenido y quieres apoyar al desarrollador, ¡sígueme en GitHub y Twitter!
                            </p>
                            <div className="flex space-x-4">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => window.open('https://github.com/datevid', '_blank')}
                                    className="flex items-center space-x-2"
                                >
                                    <Github className="h-4 w-4" />
                                    <span>GitHub</span>
                                </Button>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => window.open('https://twitter.com/datevid', '_blank')}
                                    className="flex items-center space-x-2"
                                >
                                    <Twitter className="h-4 w-4" />
                                    <span>Twitter</span>
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </CardContent>
        </Card>
    );
};

export default BcryptDefinition;