"use client"

import React from 'react';
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Separator} from "@/components/ui/separator";
import {List} from "lucide-react";

const BcryptDefinition = () => {
    return (
        <div className="flex justify-center mt-10">
            <Card className="w-full max-w-4xl shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl">¿Qué es Bcrypt?</CardTitle>
                    <CardDescription className="mt-2">
                        Bcrypt es una función de hash diseñada para proteger contraseñas, basada en el algoritmo de cifrado Blowfish.
                    </CardDescription>
                </CardHeader>
                <Separator />
                <CardContent>
                    <p>
                        <strong>Bcrypt</strong> incorpora un factor de coste que hace que el proceso de generación del hash sea más lento y, por lo tanto, más resistente a ataques de fuerza bruta.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">¿Cómo funciona Bcrypt?</h2>
                    <p className="mt-2">
                        Bcrypt toma como entrada una contraseña y un valor adicional llamado sal (salt). Este paso es crucial porque garantiza que incluso si dos usuarios tienen la misma contraseña, los hashes resultantes serán diferentes.
                    </p>
                    <ul className="list-disc list-inside mt-4">
                        <li><strong>Generación del Sal:</strong> Se genera un valor de sal aleatorio.</li>
                        <li><strong>Concatenación:</strong> La contraseña se concatena con el sal.</li>
                        <li><strong>Hashing:</strong> La combinación se pasa por el algoritmo de Blowfish en múltiples rondas.</li>
                        <li><strong>Resultado:</strong> El resultado es el hash de la contraseña que incluye el sal y el número de rondas de hashing.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6">¿Por qué es importante el factor de coste?</h2>
                    <p className="mt-2">
                        El factor de coste aumenta la dificultad para realizar un ataque de fuerza bruta, haciendo que sea más lento generar o verificar un hash.
                    </p>

                    <h2 className="text-xl font-semibold mt-6">Ventajas de Bcrypt</h2>
                    <ul className="list-disc list-inside mt-4">
                        <li><strong>Resistencia a ataques de fuerza bruta:</strong> Bcrypt está diseñado para ser lento y consumir más recursos.</li>
                        <li><strong>Protección contra ataques de sal duplicados:</strong> Utiliza un sal único para cada contraseña.</li>
                        <li><strong>Actualización continua:</strong> El factor de coste ajustable permite a Bcrypt evolucionar con los avances en hardware.</li>
                        <li><strong>Amplio soporte:</strong> Está soportado en múltiples lenguajes y plataformas.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6">Comparación con otros algoritmos de hash</h2>
                    <p className="mt-2">
                        Bcrypt ofrece mayor seguridad que MD5 o SHA-1, ya que está orientado a la protección de contraseñas y resiste ataques de fuerza bruta.
                    </p>

                    {/*<Button variant="link" className="mt-6" href="https://twitter.com/datevid" target="_blank">
                        @Datevid
                    </Button>*/}
                </CardContent>
            </Card>
        </div>
    );
};

export default BcryptDefinition;
