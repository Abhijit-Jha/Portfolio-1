import * as journey from "./journey";
import LearningCard from "../ui/LearningCard";
import { ReactNode } from "react";


export type TimelineEntry = {
    title: string;
    content: ReactNode;  
};

// Define the Timeline Data
const timelineData: TimelineEntry[] = [
    {
        title: "2025 - February",
        content: <LearningCard {...journey.reactExpoContent} />,
    },
    {
        title: "2025 - January",
        content: <LearningCard {...journey.cyberEdContent} />,
    },
    {
        title: "2024 - 5 December",
        content: <LearningCard {...journey.cyberEdInternshipContent} />,
    },
    {
        title: "2024 - September",
        content: <LearningCard {...journey.sihContent} />,
    },
    {
        title: "2024 - First hackathon",
        content: <LearningCard {...journey.megathonContent} />,
    },
    {
        title: "2024",
        content: <LearningCard {...journey.fullStackContent} />,
    },
    {
        title: "2023",
        content: <LearningCard {...journey.mernStackContent} />,
    }
];

export default timelineData;
