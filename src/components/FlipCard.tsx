import React, { useState } from 'react';
import { Star, ShoppingCart, Check, Cpu, Battery, Wifi } from 'lucide-react';

interface ProductSpec {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface FlipCardProps {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  rating: number;
  image: string;
  specs: ProductSpec[];
  features: string[];
  gradient: string;
}

const FlipCard: React.FC<FlipCardProps> = ({
  id,
  title,
  subtitle,
  price,
  rating,
  image,
  specs,
  features,
  gradient
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="relative w-[380px] h-[500px] perspective-1500">
      <div 
        className={`relative w-full h-full transition-transform duration-[800ms] transform-style-preserve-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={handleFlip}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden">
          <div 
            className="relative w-full h-full bg-gradient-to-br from-muted to-background border border-border/20"
            style={{
              background: `linear-gradient(135deg, ${gradient})`,
            }}
          >
            {/* Product Image */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-contain drop-shadow-2xl animate-float"
              />
            </div>
            
            {/* Overlay Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                  {subtitle}
                </h3>
                <h2 className="text-3xl font-bold text-foreground mb-3">
                  {title}
                </h2>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < rating 
                          ? 'fill-accent text-accent' 
                          : 'fill-muted text-muted'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    ({rating}.0)
                  </span>
                </div>
                
                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-foreground">
                    {price}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    ${(parseInt(price.replace('$', '')) * 1.3).toFixed(0)}
                  </span>
                </div>
                
                {/* Click to flip indicator */}
                <div className="mt-4 text-sm text-primary font-medium">
                  Click for details →
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden rotate-y-180">
          <div className="w-full h-full bg-gradient-to-br from-muted to-background border border-border/20 p-8">
            <div className="h-full flex flex-col">
              {/* Product Title */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                  {subtitle}
                </h3>
                <h2 className="text-2xl font-bold text-foreground">
                  {title}
                </h2>
              </div>
              
              {/* Specifications */}
              <div className="space-y-4 mb-6">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Specifications
                </h4>
                {specs.map((spec, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-primary">
                        {spec.icon}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {spec.label}
                      </span>
                    </div>
                    <span className="text-sm font-semibold text-foreground">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Features */}
              <div className="space-y-2 mb-8 flex-grow">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Key Features
                </h4>
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground/90">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full py-3 px-6 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button className="w-full py-3 px-6 rounded-lg border border-border text-foreground font-semibold hover:bg-muted transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;