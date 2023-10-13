import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config"

export async function getProjects(): Promise<Project[]> {
    const client = createClient({
        projectId:"0j6tbmc1",
        dataset:"production",
        apiVersion:"2023-05-04",
    })
    return client.fetch(
        groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            description,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
    )
}
 

export async function getProject(slug: string): Promise<Project> {
   
    return createClient(clientConfig).fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            description,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`,
        {slug}
    )
}