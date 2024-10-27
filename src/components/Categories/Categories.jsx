import Button from "../Button/Button";

export default function Categories({ category, article }) {
    const getCategoryColor = (category, id) => {
        const aquaDesignIds = [9, 19];
        const greenDesignIds = [10, 20];
        const roseResearchIds = [9, 10, 19, 20];

        if (aquaDesignIds.includes(id) && category === "Design") {
            return "bg-[#F0F9FF] text-aquaColor";
        }
        if (greenDesignIds.includes(id) && category === "Design") {
            return "bg-[#ECFDF3] text-greenColor";
        }
        if (roseResearchIds.includes(id) && category === "Research") {
            return "bg-[#FDF2FA] text-roseColor";
        }

        const defaultColors = {
            Design: "bg-[#F9F5FF] text-purple",
            Podcasts: "bg-[#F9F5FF] text-purple",
            Leadership: "bg-[#F9F5FF] text-purple",
            Management: "bg-[#F8F9FC] text-[#363F72]",
            Product: "bg-[#F0F9FF] text-aquaColor",
            Research: "bg-[#EEF4FF] text-blueColor",
            Frameworks: "bg-[#FFF6ED] text-orangeColor",
            "Software Development": "bg-[#ECFDF3] text-greenColor",
            Tools: "bg-[#FDF2FA] text-roseColor",
            Presentation: "bg-[#FDF2FA] text-roseColor",
            Interface: "bg-[#FDF2FA] text-roseColor",
            "Customer Success": "bg-[#F8F9FC] text-violetColor",
            Saas: "bg-[#F8F9FC] text-[#C01048]",
        };

        return defaultColors[category] || "bg-[#F9F5FF] text-purple";
    };

    return (
        <>
            <Button
                buttonContent={category}
                className={`${getCategoryColor(category, article.id)}`}
            />
        </>
    );
}
