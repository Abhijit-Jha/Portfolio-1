import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { questions } from "../utils/knowaboutme";

export function AccordionDemo() {
    return (
        <div className='flex justify-center '>
            <Accordion type="single" collapsible className="md:w-1/2 w-4/5">
                {questions.map((qna, index) => (
                    <AccordionItem value={`item-${index}`} key={`item-${index}`}>
                        <AccordionTrigger>{qna["question"]}</AccordionTrigger>
                        <AccordionContent>
                            {qna["answer"]}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
