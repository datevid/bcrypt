"use client"
import React, { useState } from 'react';
import bcrypt from 'bcryptjs';

const BcryptGenerator: React.FC = () => {
    const [encryptString, setEncryptString] = useState<string>('');
    const [encryptedHash, setEncryptedHash] = useState<string>('');
    const [rounds, setRounds] = useState<number>(12);
    const [decryptHash, setDecryptHash] = useState<string>('');
    const [decryptString, setDecryptString] = useState<string>('');
    const [matchResult, setMatchResult] = useState<string>('');

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

    return (
        <div className="container mx-auto p-4 bg-gray-100 text-gray-800">
            <h1 className="text-2xl mb-4 font-bold text-gray-700">Bcrypt-Generator - Online Bcrypt Hash Generator & Checker</h1>

            <div className="flex space-x-4">
                <div className="w-1/2 bg-white p-4 rounded shadow">
                    <h2 className="text-xl mb-2 font-semibold text-gray-700">Encrypt</h2>
                    <p className="mb-2 text-gray-600">Encrypt some text. The result shown will be a Bcrypt encrypted hash.</p>
                    <input
                        type="text"
                        value={encryptString}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEncryptString(e.target.value)}
                        placeholder="String"
                        className="w-full p-2 mb-2 border border-gray-300 rounded"
                    />
                    <button onClick={handleEncrypt} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">Encrypt</button>
                    <div className="mt-2">
                        <label className="text-gray-600">Rounds:</label>
                        <div className="flex items-center">
                            <button onClick={() => setRounds(Math.max(1, rounds - 1))} className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 transition-colors">-</button>
                            <span className="mx-2 text-gray-700">{rounds}</span>
                            <button onClick={() => setRounds(rounds + 1)} className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300 transition-colors">+</button>
                        </div>
                    </div>
                    {encryptedHash && (
                        <div className="mt-2">
                            <h3 className="font-semibold text-gray-700">Encrypted Hash:</h3>
                            <p className="break-all text-gray-600">{encryptedHash}</p>
                        </div>
                    )}
                </div>

                <div className="w-1/2 bg-white p-4 rounded shadow">
                    <h2 className="text-xl mb-2 font-semibold text-gray-700">Decrypt</h2>
                    <p className="mb-2 text-gray-600">Test your Bcrypt hash against some plaintext, to see if they match.</p>
                    <input
                        type="text"
                        value={decryptHash}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDecryptHash(e.target.value)}
                        placeholder="Hash to check"
                        className="w-full p-2 mb-2 border border-gray-300 rounded"
                    />
                    <input
                        type="text"
                        value={decryptString}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDecryptString(e.target.value)}
                        placeholder="String to check against"
                        className="w-full p-2 mb-2 border border-gray-300 rounded"
                    />
                    <button onClick={handleDecrypt} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">Check</button>
                    {matchResult && (
                        <div className="mt-2">
                            <h3 className="font-semibold text-gray-700">Result:</h3>
                            <p className="text-gray-600">{matchResult}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BcryptGenerator;