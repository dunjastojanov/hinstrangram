import profile from "../data/profile.json";
import type { IProfile } from "../interfaces/profile";

export function useProfile() {
	return profile as IProfile;
}