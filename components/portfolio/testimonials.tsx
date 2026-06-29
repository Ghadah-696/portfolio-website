"use client"

import { useLanguage } from '@/lib/i18n'
import { cn } from '@/lib/utils'
import { Quote, Star } from 'lucide-react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'

const baseTestimonials = [
  { id: '1', platform: 'Upwork', country: '🇹🇷' },
  { id: '2', platform: 'Mostaql', country: '🇲🇦' },
  { id: '3', platform: 'Upwork', country: '🇹🇷' },
]

// تكرار داخلي فقط لتحسين الـ loop
const testimonialData = [
  ...baseTestimonials,
  ...baseTestimonials,
  ...baseTestimonials,
]

export function Testimonials() {
  const { t, isRTL } = useLanguage()

  return (
    <section id="testimonials" className="py-18 lg:py-28 bg-card/30 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className={cn(
          "text-center mb-16",
  
        )}>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('testimonials.title')}
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <Swiper
        key={isRTL ? 'rtl' : 'ltr'}
        dir="ltr"
          modules={[Autoplay, EffectCoverflow]}

          effect="coverflow"

          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 180,
            modifier: 2,
            scale: 0.9,
            slideShadows: false,
          }}

          centeredSlides={true}

          loop={true}

          grabCursor={true}

          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}

          speed={1200}

          observer={true}
          observeParents={true}
          watchSlidesProgress={true}

          breakpoints={{
            320: {
              slidesPerView: 1.1,
              spaceBetween: 20,
            },

            768: {
              slidesPerView: 1.6,
              spaceBetween: 24,
            },

            1024: {
              slidesPerView: 2.2,
              spaceBetween: 30,
            },
          }}

          className="pb-12 sm:pb-16"
        >
          {testimonialData.map((item, index) => (
            <SwiperSlide
              key={`${item.id}-${index}`}
              className="h-auto"
            >
              <div
                className={cn(
                  "min-h-[380px] p-8 rounded-2xl",
                  "bg-card border border-border/50",
                  "flex flex-col justify-between",
                  "shadow-sm transition-all duration-500",
                  "hover:border-primary/40",
                  isRTL && "text-right"
                )}
              >
                <div>
                  {/* Stars */}
                  <div className={cn(
                    "flex gap-1 mb-4",
                    isRTL && "flex-row-reverse"
                  )}>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </div>

                  {/* Quote Icon */}
                  <Quote
                    className={cn(
                      "w-8 h-8 text-primary/20 mb-4",
                      isRTL && "ml-auto scale-x-[-1]"
                    )}
                  />

                  {/* Text */}
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{t(`testimonials.${item.id}.text`)}"
                  </p>
                </div>

                {/* Footer */}
                <div className={cn(
                  "flex items-center gap-3 pt-6 mt-6 border-t border-border/40",
                  // isRTL && "flex-row-reverse"
                  //  isRTL && "text-right"
                )}>
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/10">
                    <span className="text-lg font-bold text-primary">
                      {t(`testimonials.${item.id}.name`).charAt(0)}
                    </span>
                  </div>

                  {/* <div className="flex-1"> */}
                  <div
                    className={cn(
                   "flex-1",
                    // isRTL && "text-right"
                     )}
>
                    <p className="font-bold text-foreground text-sm flex items-center gap-2">
                      {t(`testimonials.${item.id}.name`)}
                      

                      <span className="text-base">
                        {item.country}
                      </span>
                    </p>

                    <div className={cn(
                      "flex justify-between items-center",
                      // isRTL && "flex-row-reverse"
                    )}>
                      <p className="text-[11px] text-muted-foreground uppercase tracking-wider font-medium">
                        {t(`testimonials.${item.id}.role`)}
                      </p>

                      <span className="text-[10px] font-bold text-primary opacity-50">
                        {item.platform}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}