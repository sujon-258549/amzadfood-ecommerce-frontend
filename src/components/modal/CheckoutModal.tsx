"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export interface OrderItem {
  id: string | number;
  name: string;
  price: number | string;
  quantity: number | string;
  image?: string ;
}

interface CheckoutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  orderItems: OrderItem[];
  onSubmit?: (orderData: OrderFormData) => void;
}

export interface OrderFormData {
  customerName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  shipping: string;
  paymentMethod: "online" | "cash";
  notes?: string;
}

const CheckoutModal = ({
  open,
  onOpenChange,
  orderItems,
  onSubmit,
}: CheckoutModalProps) => {
  const [formData, setFormData] = useState<OrderFormData>({
    customerName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    shipping: "inside",
    paymentMethod: "online",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const subtotal = orderItems.reduce(
    (sum, item) => {
      const price = typeof item.price === 'string' ? parseFloat(item.price) : item.price;
      const quantity = typeof item.quantity === 'string' ? parseFloat(item.quantity) : item.quantity;
      return sum + (price * quantity);
    },
    0
  );

  const shippingCost = formData.shipping === "inside" ? 60 : 100;
  const totalAmount = subtotal + shippingCost;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default submit handler
        console.log("Order submitted:", {
          ...formData,
          items: orderItems,
          totalAmount,
        });
        // TODO: Implement actual API call
      }
      // Close modal on success
      onOpenChange(false);
      // Reset form
      setFormData({
        customerName: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        shipping: "inside",
        paymentMethod: "online",
        notes: "",
      });
    } catch (error) {
      console.error("Error submitting order:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] !rounded-[5px] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Checkout</DialogTitle>
          <DialogDescription>
            Please fill in your details to complete the order
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Order Items Summary */}
          <div className="border rounded-lg p-4 space-y-4">
            {/* Header */}
            <div className="grid grid-cols-2 border-b pb-2">
              <h3 className="font-semibold text-base">PRODUCT</h3>
              <h3 className="font-semibold text-base text-right">SUBTOTAL</h3>
            </div>

            {/* Product List */}
            <div className="space-y-3">
              {orderItems.map((item) => {
                const price = typeof item.price === 'string' ? parseFloat(item.price) : item.price;
                const quantity = typeof item.quantity === 'string' ? parseFloat(item.quantity) : item.quantity;
                const itemTotal = price * quantity;
                
                return (
                  <div
                    key={item.id}
                    className="grid grid-cols-2 gap-4"
                  >
                    <div className="flex-1">
                      <p className="text-sm sm:text-base">
                        {item.name} × {quantity}
                      </p>
                    </div>
                    <p className="text-sm sm:text-base text-right font-medium">
                      ৳ {itemTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Subtotal */}
            <div className="grid grid-cols-2 border-t pt-3">
              <span className="text-sm sm:text-base">Subtotal</span>
              <span className="text-sm sm:text-base text-right font-medium">
                ৳ {subtotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>

            {/* Shipping */}
            <div className="space-y-2 border-t pt-3">
              <div className="grid grid-cols-2 mb-2">
                <span className="text-sm sm:text-base">Shipping</span>
                <span className="text-sm sm:text-base text-right font-medium">
                  ৳ {shippingCost.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </div>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="shipping"
                    value="inside"
                    checked={formData.shipping === "inside"}
                    onChange={handleInputChange}
                    className="w-4 h-4 accent-primary focus:outline-none"
                  />
                  <span className="text-sm sm:text-base">
                    ঢাকা সিটির ভিতরে: ৳ 60.00
                  </span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="shipping"
                    value="outside"
                    checked={formData.shipping === "outside"}
                    onChange={handleInputChange}
                    className="w-4 h-4 accent-primary focus:outline-none"
                  />
                  <span className="text-sm sm:text-base">
                    ঢাকা সিটির বাইরে: ৳ 100.00
                  </span>
                </label>
              </div>
            </div>

            {/* Total */}
            <div className="grid grid-cols-2 border-t pt-3">
              <span className="text-base sm:text-lg font-semibold">Total</span>
              <span className="text-base sm:text-lg font-bold text-right">
                ৳ {totalAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
          </div>

          {/* Payment Method Info */}
          <div className="border rounded-lg p-4 bg-gray-50">
            <div className="space-y-1">
              <p className="font-semibold text-base">
                {formData.paymentMethod === "online" ? "Online Payment" : "Cash on Delivery"}
              </p>
              <p className="text-sm text-gray-600">
                {formData.paymentMethod === "online" 
                  ? "Complete payment online through secure payment gateway."
                  : "Pay with cash upon delivery."}
              </p>
            </div>
          </div>

          {/* Customer Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Customer Information</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-3">
                <Label htmlFor="customerName">Full Name *</Label>
                <Input
                  id="customerName"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="01XXXXXXXXX"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Delivery Address *</Label>
              <Textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                placeholder="Enter your complete delivery address"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">City *</Label>
              <Input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                placeholder="Enter your city"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="paymentMethod">Payment Method *</Label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="online"
                    checked={formData.paymentMethod === "online"}
                    onChange={handleInputChange}
                    required
                    className="w-4 h-4 accent-primary focus:outline-none"
                  />
                  <span className="text-sm sm:text-base">Online Payment</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    checked={formData.paymentMethod === "cash"}
                    onChange={handleInputChange}
                    required
                    className="w-4 h-4 accent-primary focus:outline-none"
                  />
                  <span className="text-sm sm:text-base">Cash on Delivery</span>
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes (Optional)</Label>
              <Textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Any special instructions..."
                rows={3}
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Place Order"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutModal;
