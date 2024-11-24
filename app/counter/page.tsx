'use client'

import { useEffect, useState } from "react"
import { Button, Card, CardBody, CardHeader, Divider, NextUIProvider } from "@nextui-org/react";

export default function Counter() {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log("render DONE")
    }, [])

    useEffect(() => {
        console.log("valor do counter alterou", counter)
    }, [counter])

    return <NextUIProvider>
        <Card className="max-w-[200px] m-10">
            <CardHeader >
                <p>Counter</p>
            </CardHeader>
            <Divider />
            <CardBody >
                <div className="flex justify-center align-center m-10">
                    <p className="text-2xl">{counter}</p>
                </div>
                <Button onClick={() => {
                    setCounter(counter + 1)
                }}>Aumentar Counter</Button>
            </CardBody>
        </Card>
    </NextUIProvider >
}