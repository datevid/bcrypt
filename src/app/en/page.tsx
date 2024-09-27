"use client"

import React from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Twitter } from 'lucide-react';
import BcryptDefinitionEn from "@/app/bcrypt-definition/page";

export default function Home() {
    return (
        <>
        <BcryptDefinitionEn></BcryptDefinitionEn>
        </>
    );
}