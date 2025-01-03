export interface ProjectProps {
    id: string;
    name: string;
    role: string;
    description?: string;       // TODO: Make compulsary later
    img?: string;               // TODO: Later change UI based on if image available or nor
    titleLink?: string;        // Link to institution/company in title & github for projects
    location?: string;          // Below all these for companies and education only
    startDate?: string;
    endDate?: string;
}