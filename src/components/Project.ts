export interface ProjectProps {
    id: string;
    name: string;
    type: "Experience" | "Project" | "Education";       // Just for some render changes
    role?: string;              // No role for Project
    img?: string;               // TODO: Later change UI based on if image available or nor
    titleLink?: string;         // Link to institution/company in title & github for projects
    location?: string;          // Below all these for companies and education only
    startDate?: string;
    endDate?: string;
    description?: string[];       // Optional for education
    skills?: string[];            // Optional for education 
    isHidden?: boolean;           // For Project (Have many projects - should be able to select instead of editing json)    
    // TODO: How to mention order of projects without editing json
}