import React from 'react';
import FlipCard from '@/components/FlipCard';
import { Cpu, Battery, Wifi, Camera, Heart, Activity, Smartphone, Music } from 'lucide-react';
import headphonesImg from '@/assets/headphones.jpg';
import smartwatchImg from '@/assets/smartwatch.jpg';
import smartphoneImg from '@/assets/smartphone.jpg';
import '@/styles/flipcard.css';

const Index = () => {
  const products = [
    {
      id: 'headphones',
      title: 'AirMax Pro',
      subtitle: 'Premium Wireless',
      price: '$349',
      rating: 5,
      image: headphonesImg,
      gradient: 'hsla(280, 100%, 60%, 0.2), hsla(220, 100%, 60%, 0.1)',
      specs: [
        { icon: <Battery className="w-4 h-4" />, label: 'Battery Life', value: '40 hours' },
        { icon: <Wifi className="w-4 h-4" />, label: 'Connectivity', value: 'Bluetooth 5.3' },
        { icon: <Music className="w-4 h-4" />, label: 'Driver Size', value: '40mm' },
      ],
      features: [
        'Active Noise Cancellation',
        'Spatial Audio with head tracking',
        'Adaptive EQ technology',
        'Premium leather cushions',
      ],
    },
    {
      id: 'smartwatch',
      title: 'Pulse X',
      subtitle: 'Fitness Tracker',
      price: '$599',
      rating: 4,
      image: smartwatchImg,
      gradient: 'hsla(220, 100%, 60%, 0.2), hsla(161, 100%, 50%, 0.1)',
      specs: [
        { icon: <Heart className="w-4 h-4" />, label: 'Heart Rate', value: '24/7 monitoring' },
        { icon: <Battery className="w-4 h-4" />, label: 'Battery', value: '7 days' },
        { icon: <Activity className="w-4 h-4" />, label: 'Water Resist', value: '5 ATM' },
      ],
      features: [
        'GPS & GLONASS tracking',
        'Sleep quality analysis',
        'SpO2 blood oxygen monitoring',
        'Over 100 workout modes',
      ],
    },
    {
      id: 'smartphone',
      title: 'Nexus Ultra',
      subtitle: 'Flagship Phone',
      price: '$999',
      rating: 5,
      image: smartphoneImg,
      gradient: 'hsla(161, 100%, 50%, 0.2), hsla(280, 100%, 60%, 0.1)',
      specs: [
        { icon: <Cpu className="w-4 h-4" />, label: 'Processor', value: 'A17 Bionic' },
        { icon: <Camera className="w-4 h-4" />, label: 'Camera', value: '108MP AI' },
        { icon: <Smartphone className="w-4 h-4" />, label: 'Display', value: '6.8" OLED' },
      ],
      features: [
        '5G connectivity',
        '120Hz ProMotion display',
        'Titanium aerospace frame',
        'All-day battery life',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-muted">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-glow-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-glow-pulse animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <header className="text-center mb-16 pt-8">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Tech Premium
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of technology with our exclusive collection of premium devices
          </p>
        </header>

        {/* Flip Cards Grid */}
        <div className="flex flex-wrap justify-center gap-12 pb-12">
          {products.map((product) => (
            <FlipCard key={product.id} {...product} />
          ))}
        </div>

        {/* Footer */}
        <footer className="text-center py-8 mt-16 border-t border-border/20">
          <p className="text-sm text-muted-foreground">
            Click on any card to explore product details
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;