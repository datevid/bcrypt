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

const BcryptGeneratorEn: React.FC = () => {
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
            question: "What is Bcrypt?",
            answer: "Bcrypt is a password hashing function specifically designed to protect passwords. It was developed in 1999 by Niels Provos and David Mazières, based on the Blowfish encryption algorithm. Unlike traditional hash algorithms like MD5 or SHA-1, Bcrypt incorporates a cost factor that makes the hashing process slower and more resistant to brute-force attacks."
        },
        {
            question: "How does Bcrypt work?",
            answer: "Bcrypt works by taking a password and a random salt as input. The process involves: 1) Generating a random salt, 2) Concatenating the password with the salt, 3) Passing the combination through the Blowfish algorithm multiple times (determined by the cost factor), and 4) Producing a final hash that includes both the salt and the number of hashing rounds."
        },
        {
            question: "What are rounds in Bcrypt?",
            answer: "Rounds in Bcrypt refer to the cost factor or work factor. It determines how many times the hashing process is repeated. More rounds increase the time and computational power needed to generate the hash, making it more resistant to brute-force attacks. The number of rounds can be adjusted to balance security and performance needs."
        },
        {
            question: "Why is the cost factor important?",
            answer: "The cost factor is crucial because it determines the computational effort required to generate or verify a hash. A higher cost factor means more time and resources are needed, which significantly slows down brute-force attacks. It also allows Bcrypt to evolve with advances in hardware, maintaining its effectiveness over time."
        },
        {
            question: "Is Bcrypt reversible?",
            answer: "No, Bcrypt is not reversible. It's a one-way hashing function, which means you can't decrypt a Bcrypt hash back to the original password. You can only verify if a given password matches the hash."
        },
        {
            question: "What are the advantages of Bcrypt?",
            answer: "Bcrypt offers several advantages: 1) Strong resistance to brute-force attacks due to its slow hashing process, 2) Protection against rainbow table attacks by using unique salts for each password, 3) Adaptability to future hardware improvements through its adjustable cost factor, and 4) Wide support across various programming languages and platforms."
        },
        {
            question: "How does Bcrypt compare to other hashing algorithms?",
            answer: "Compared to algorithms like MD5, SHA-1, or SHA-256, Bcrypt offers superior security for password storage. While MD5 and SHA-1 are very fast, which is beneficial for other cryptographic purposes, this speed is a disadvantage for password storage as it facilitates brute-force attacks. Bcrypt balances security and performance, providing better protection against such attacks."
        },
        {
            question: "How do I use this generator?",
            answer: "To encrypt, enter a string in the 'Encrypt' section and click 'Encrypt'. To verify a hash, enter the hash in the 'Hash to check' field and the string to check against in the 'String to check against' field, then click 'Check'."
        },
    ];

    return (
        <div className="container mx-auto p-4 min-h-screen">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Bcrypt Generator & Checker</h1>

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
                    <CardTitle className="text-xl font-semibold text-gray-700">Frequently Asked Questions</CardTitle>
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

export default BcryptGeneratorEn;