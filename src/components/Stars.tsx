import { ShootingStars } from "@/ui/shooting-stars";
import { StarsBackground } from "@/ui/stars-background";

export function Stars() {
    return (
        <div className="pointer-events-none">
            <ShootingStars />
            <StarsBackground />
        </div>
    )
}