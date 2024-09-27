"use client"

import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Twitter } from 'lucide-react';

export default function Home() {
    return (
        <div className="container mx-auto p-4 min-h-screen">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Bienvenido al Generador y Verificador de Bcrypt</h1>

            <Card className="mb-8">
                <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-gray-700">Acerca de Este Proyecto</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg mb-4">
                        Este proyecto proporciona una interfaz amigable para generar hashes Bcrypt y verificar contraseñas contra hashes existentes. Está diseñado para ayudar a desarrolladores y entusiastas de la seguridad a entender y utilizar Bcrypt para la seguridad de contraseñas.
                    </p>
                    <p className="text-lg mb-4">
                        Bcrypt es una poderosa función de hashing diseñada específicamente para contraseñas. Incorpora un salt y un factor de costo, haciéndola altamente resistente a ataques de fuerza bruta.
                    </p>
                    <Link href="/bcrypt-es" passHref>
                        <Button className="w-full text-lg py-6">
                            Probar el Generador y Verificador Bcrypt
                        </Button>
                    </Link>
                </CardContent>
            </Card>

            <Card className="mb-8">
                <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-gray-700">Características Principales</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li>Generar hashes Bcrypt con rondas personalizables</li>
                        <li>Verificar contraseñas contra hashes Bcrypt existentes</li>
                        <li>Sección educativa de preguntas frecuentes sobre Bcrypt y su importancia</li>
                        <li>Interfaz fácil de usar con funcionalidad de copiar al portapapeles</li>
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="py-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <h2 className="text-xl font-semibold">Creado con ❤️ por @Datevid</h2>
                        <p className="text-gray-600">
                            Si encuentras útil esta herramienta, ¡considera seguir al desarrollador en GitHub y Twitter!
                        </p>
                        <div className="flex space-x-4">
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => window.open('https://github.com/datevid', '_blank')}
                                className="flex items-center space-x-2"
                            >
                                <Github className="h-5 w-5" />
                                <span>GitHub</span>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                onClick={() => window.open('https://twitter.com/datevid', '_blank')}
                                className="flex items-center space-x-2"
                            >
                                <Twitter className="h-5 w-5" />
                                <span>Twitter</span>
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}