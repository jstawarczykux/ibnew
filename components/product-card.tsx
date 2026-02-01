"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Plus, Minus } from "lucide-react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

interface ProductCardProps {
    id: number | string
    name: string
    taste: string
    price: number
    badge?: string
    badgeType?: string
}

export function ProductCard({
    name,
    taste,
    price,
    badge,
    badgeType,
}: ProductCardProps) {
    const [quantity, setQuantity] = useState(0)

    const handleIncrease = () => setQuantity(q => q + 1)
    const handleDecrease = () => setQuantity(q => Math.max(0, q - 1))

    return (
        <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
            <div className="relative p-6 pb-0">
                {/* Badges */}
                {badge && (
                    <div className="absolute top-4 left-4 z-10 flex flex-col gap-1">
                        <span
                            className={`px-3 py-1 text-xs font-bold rounded-full ${badgeType === "filter"
                                ? "bg-[#2d7d4f] text-white"
                                : badgeType === "espresso"
                                    ? "bg-background text-white"
                                    : "bg-pink text-background"
                                }`}
                        >
                            {badge}
                        </span>
                        {badge === "Limitka" && (
                            <span className="px-3 py-1 text-xs font-bold rounded-full bg-pink text-background">
                                Limitka
                            </span>
                        )}
                    </div>
                )}
                <div className="w-full aspect-square flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                    <Image
                        src="/product-bag.png"
                        alt={name}
                        width={300}
                        height={400}
                        className="object-contain w-full h-full"
                    />
                </div>
            </div>
            <div className="p-6 pt-2 flex flex-col flex-grow">
                <h3 className="font-bold text-background text-lg mb-2 leading-tight min-h-[2.5rem] flex items-center">
                    {name}
                </h3>
                <p className="text-sm text-[#2d7d4f] mb-4 min-h-[2.5rem] flex items-start">
                    {taste}
                </p>
                <div className="flex items-center justify-between mt-auto gap-4">
                    <span className="text-lg font-bold text-background whitespace-nowrap">{price} Kč</span>
                    <div className="flex items-center gap-2">
                        <Select defaultValue="250g">
                            <SelectTrigger className="w-[85px] !h-12 border-gray-200 rounded-none bg-white text-background px-2">
                                <SelectValue placeholder="Velikost" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="250g">250 g</SelectItem>
                                <SelectItem value="1kg">1 kg</SelectItem>
                            </SelectContent>
                        </Select>

                        {quantity === 0 ? (
                            <Button
                                size="sm"
                                onClick={handleIncrease}
                                className="bg-[#2d7d4f] text-white hover:bg-[#2d7d4f]/90 rounded-none px-6 !h-12 font-bold whitespace-nowrap"
                            >
                                Do košíku
                            </Button>
                        ) : (
                            <div className="flex items-center bg-[#f0f0f0] rounded-none !h-12 px-1">
                                <button
                                    onClick={handleDecrease}
                                    className="p-1 text-[#2d7d4f] hover:opacity-70 transition-opacity"
                                    aria-label="Decrease quantity"
                                >
                                    <Minus size={18} strokeWidth={3} />
                                </button>
                                <span className="w-8 text-center font-bold text-background text-sm">
                                    {quantity}
                                </span>
                                <button
                                    onClick={handleIncrease}
                                    className="p-1 text-[#2d7d4f] hover:opacity-70 transition-opacity"
                                    aria-label="Increase quantity"
                                >
                                    <Plus size={18} strokeWidth={3} />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
