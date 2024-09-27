"use client"

import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {ExternalLink, Facebook, Github, Twitter} from 'lucide-react'
import {Button} from "@/components/ui/button";
import Link from 'next/link';

const BcryptDefinitionEn = () => {

    const shareOnFacebook = () => {
        const url = encodeURIComponent(window.location.href);
        const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        window.open(shareUrl, '_blank', 'width=600,height=400');
    };

    const shareOnTwitter = () => {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent("Check out this awesome Bcrypt Generator!");
        const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        window.open(shareUrl, '_blank', 'width=600,height=400');
    };

    return (
        <>
            <div className="container mx-auto p-4 min-h-screen">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Welcome to Bcrypt Generator & Checker</h1>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold">What is Bcrypt?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <p className="text-lg">
                            <strong>Bcrypt</strong> is a hash function specifically designed to protect passwords.
                            Developed in 1999 by Niels Provos and David Mazières, it's based on the Blowfish encryption
                            algorithm. Unlike more traditional algorithms like MD5 or SHA-1, Bcrypt incorporates a cost
                            factor that makes the process of generating the hash slower and more resistant to brute force
                            attacks.
                        </p>

                        <div className="flex justify-between items-center">
                            <Link href="/bcrypt-en" passHref>
                                <Button className="text-lg py-6">
                                    Try Bcrypt Generator & Checker
                                </Button>
                            </Link>
                            <Link href="/bcrypt-es" passHref>
                                <Button className="text-lg py-6">
                                    Pruebe el generador y verificador de Bcrypt
                                </Button>
                            </Link>
                        </div>

                        <section>
                            <h2 className="text-2xl font-semibold mb-3">How does Bcrypt work?</h2>
                            <p className="mb-4">
                                Bcrypt takes a password and an additional value called salt as input. The salt is a set of
                                random data that is generated for each password before applying the hash algorithm.
                            </p>
                            <p className="mb-2">The Bcrypt process breaks down into:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Salt Generation:</strong> A random salt value is generated.</li>
                                <li><strong>Concatenation:</strong> The password is concatenated with the salt.</li>
                                <li><strong>Hashing:</strong> The combination goes through the Blowfish algorithm in multiple
                                    rounds.
                                </li>
                                <li><strong>Result:</strong> The final hash includes the salt and the number of rounds.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-3">Why is the cost factor important?</h2>
                            <p>
                                The cost factor determines how many times the hashing process is repeated, increasing the
                                difficulty of performing a brute force attack. The higher the cost factor, the more time and
                                computational resources are required to generate or verify a hash.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-3">Advantages of Bcrypt</h2>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Resistance to brute force attacks:</strong> Designed to be slow and consume
                                    more resources.
                                </li>
                                <li><strong>Protection against duplicate salt attacks:</strong> Uses a unique salt for each
                                    password.
                                </li>
                                <li><strong>Continuous updating:</strong> Adjustable cost factor to evolve with hardware
                                    advancements.
                                </li>
                                <li><strong>Wide support:</strong> Easy implementation in a variety of environments.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-semibold mb-3">Comparison with other hash algorithms</h2>
                            <p>
                                Compared to MD5, SHA-1, or SHA-256, Bcrypt offers greater security due to its design
                                oriented towards protecting passwords. While MD5 and SHA-1 are extremely fast, Bcrypt
                                balances security and performance, offering superior protection against brute force attacks.
                            </p>
                        </section>

                        <div className="flex justify-between items-center">
                            <Link href="/bcrypt-en" passHref>
                                <Button className="text-lg py-6">
                                    Try Bcrypt Generator & Checker
                                </Button>
                            </Link>
                            <Link href="/bcrypt-es" passHref>
                                <Button className="text-lg py-6">
                                    Pruebe el generador y verificador de Bcrypt
                                </Button>
                            </Link>
                        </div>

                        <Alert>
                            <AlertTitle>Important Note</AlertTitle>
                            <AlertDescription>
                                Bcrypt has become a de facto standard for password protection. Implementing it in
                                applications where passwords are handled is essential to ensure that user data is
                                protected from potential security breaches.
                            </AlertDescription>
                        </Alert>

                        <Card className="w-full">
                            <CardContent className="py-6">
                                <div className="flex flex-col items-center space-y-4">
                                    <span className="text-lg font-semibold">Share this Bcrypt definition:</span>
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

                        <Card className="w-full">
                            <CardContent className="py-6">
                                <div className="flex flex-col items-center space-y-4 text-center">
                                    <h2 className="text-sm font-semibold">Created with ❤️ by @Datevid</h2>
                                    <p className="text-sm text-gray-500">
                                        This Bcrypt definition was created with great enthusiasm so that everyone can learn
                                        about password security.
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        If you like this content and want to support the developer, follow me on GitHub and
                                        Twitter!
                                    </p>
                                    <div className="flex space-x-4">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => window.open('https://github.com/datevid', '_blank')}
                                            className="flex items-center space-x-2"
                                        >
                                            <Github className="h-4 w-4"/>
                                            <span>GitHub</span>
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => window.open('https://twitter.com/datevid', '_blank')}
                                            className="flex items-center space-x-2"
                                        >
                                            <Twitter className="h-4 w-4"/>
                                            <span>Twitter</span>
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="w-full">
                            <CardContent className="py-6">
                                <div className="flex justify-center">
                                    <Link href="/bcrypt-es">
                                        <Button variant="default" size="lg" className="flex items-center space-x-2">
                                            <ExternalLink className="h-5 w-5"/>
                                            <span>Generate Bcrypt Hash</span>
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </CardContent>
                </Card>
            </div>
        </>
    );
};

export default BcryptDefinitionEn;