declare module 'astro:env/client' {
	export const PUBLIC_API_URL: string | undefined;	
}declare module 'astro:env/server' {
	export const PORT: number;	
	export const SECRET_API: string;	
}