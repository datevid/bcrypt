"use client"

import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Twitter } from 'lucide-react';

export default function Home() {
    return (
        <div className="container mx-auto p-4 min-h-screen">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Welcome to Bcrypt Generator & Checker</h1>

            <Card className="mb-8">
                <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-gray-700">About This Project</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg mb-4">
                        This project provides a user-friendly interface for generating Bcrypt hashes and verifying
                        passwords against existing hashes. It's designed to help developers and security enthusiasts
                        understand and utilize Bcrypt for password security.
                    </p>
                    <p className="text-lg mb-4">
                        Bcrypt is a powerful hashing function specifically designed for passwords. It incorporates a
                        salt and a cost factor, making it highly resistant to brute-force attacks.
                    </p>
                    <div className="flex justify-between items-center">
                        <Link href="/bcrypt" passHref>
                            <Button className="text-lg py-6">
                                Try Bcrypt Generator & Checker
                            </Button>
                        </Link>
                        <Link href="/bcrypt-es" passHref>
                            <Button className="text-lg py-6" variant="outline">
                                Versión en Español
                            </Button>
                        </Link>
                    </div>
                </CardContent>
            </Card>

            <Card className="mb-8">
                <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-gray-700">Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc pl-6 space-y-2 text-lg">
                        <li>Generate Bcrypt hashes with customizable rounds</li>
                        <li>Verify passwords against existing Bcrypt hashes</li>
                        <li>Educational FAQ section about Bcrypt and its importance</li>
                        <li>User-friendly interface with copy-to-clipboard functionality</li>
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="py-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <h2 className="text-xl font-semibold">Created with ❤️ by @Datevid</h2>
                        <p className="text-gray-600">
                            If you find this tool helpful, consider following the developer on GitHub and Twitter!
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