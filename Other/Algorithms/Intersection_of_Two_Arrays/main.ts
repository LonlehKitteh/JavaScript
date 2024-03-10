function intersection(nums1: number[], nums2: number[]): number[] {
    const set2 = new Set(nums2);

    return Array.from(new Set(nums1)).filter(n => set2.has(n)); 
};