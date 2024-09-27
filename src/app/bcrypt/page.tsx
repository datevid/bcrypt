"use client"

import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Copy, Check } from 'lucide-react';

const BcryptGenerator: React.FC = () => {
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

    const faqItems = [
        {
            question: "What is Bcrypt?",
            answer: "Bcrypt is a password hashing function designed to be slow and resistant to brute-force attacks. It's widely used for securely storing passwords."
        },
        {
            question: "What are rounds in Bcrypt?",
            answer: "Rounds in Bcrypt refer to the number of iterations used in the hashing process. More rounds increase the time and computational power needed to generate the hash, making it more resistant to attacks."
        },
        {
            question: "Is Bcrypt reversible?",
            answer: "No, Bcrypt is not reversible. It's a one-way hashing function, which means you can't decrypt a Bcrypt hash back to the original password. You can only verify if a given password matches the hash."
        },
        {
            question: "How do I use this generator?",
            answer: "To encrypt, enter a string in the 'Encrypt' section and click 'Encrypt'. To verify a hash, enter the hash in the 'Hash to check' field and the string to check against in the 'String to check against' field, then click 'Check'."
        },
    ];

    return (
        <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
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
        </div>
    );
};

export default BcryptGenerator;