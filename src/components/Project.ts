export interface ProjectProps {
    id: string;
    name: string;
    role: string;
    type: "Experience" | "Project" | "Education";       // Just for some render changes
    img?: string;               // TODO: Later change UI based on if image available or nor
    titleLink?: string;         // Link to institution/company in title & github for projects
    location?: string;          // Below all these for companies and education only
    startDate?: string;
    endDate?: string;
    description?: string[];       // Optional for education     // TODO: Best type for description in json and here
    skills?: string[];            // Optional for education 
}