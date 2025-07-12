'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

const phoneSchema = z.object({
  phone: z
    .string()
    .min(9, 'Must be 9 digits')
    .max(9, 'Must be 9 digits')
    .regex(/^\d+$/, 'Must be numeric'),
});

const otpSchema = z.object({
  otp: z.string().length(6, 'OTP must be 6 digits'),
});

type PhoneFormValues = z.infer<typeof phoneSchema>;
type OTPFormValues = z.infer<typeof otpSchema>;

export default function LoginForm() {
  const [step, setStep] = React.useState<'PHONE' | 'OTP'>('PHONE');

  const phoneForm = useForm<PhoneFormValues>({
    resolver: zodResolver(phoneSchema),
    defaultValues: { phone: '' },
  });

  const otpForm = useForm<OTPFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: '' },
  });

  const handlePhoneSubmit = (values: PhoneFormValues) => {
    const fullPhone = `+94${values.phone}`;
    console.log('Phone submitted:', fullPhone);
    setStep('OTP');
  };

  const handleOtpSubmit = (values: OTPFormValues) => {
    console.log('OTP submitted:', values.otp);
    // integrate Supabase here
  };

  return (
    <div className="max-w-sm mx-auto p-6 space-y-6 rounded-xl border shadow-sm mt-20">
      {step === 'PHONE' && (
        <Form {...phoneForm}>
          <form onSubmit={phoneForm.handleSubmit(handlePhoneSubmit)} className="space-y-4">
            <FormField
              control={phoneForm.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="phone"><h1>Enter Your Mobile Number</h1></FormLabel>
                  <div className="flex items-center">
                    <span className="px-3 py-2 border border-r-0 rounded-l-md bg-muted text-sm text-muted-foreground">
                      +94
                    </span>
                    <FormControl>
                      <Input
                        id="phone"
                        maxLength={9}
                        placeholder="7XXXXXXXX"
                        className="rounded-l-none"
                        {...field}
                        onChange={(e) => field.onChange(e.target.value.replace(/\D/g, ''))}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Send OTP
            </Button>
          </form>
        </Form>
      )}

      {step === 'OTP' && (
        <Form {...otpForm}>
          <form onSubmit={otpForm.handleSubmit(handleOtpSubmit)} className="space-y-4">
            <FormField
              control={otpForm.control}
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="otp">Enter OTP</FormLabel>
                  <FormControl>
                    <Input
                      id="otp"
                      placeholder="6-digit code"
                      maxLength={6}
                      {...field}
                      onChange={(e) => field.onChange(e.target.value.replace(/\D/g, ''))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Verify OTP
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
}
