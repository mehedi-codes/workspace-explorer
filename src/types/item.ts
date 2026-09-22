
export type ItemType = 'file' | 'folder';

export type Item = {
    id: string;
    name: string;
    type: ItemType;
    parentId: string | null;
    content?: string; // Optional: Present when type === 'file'
    createdAt: string;
    updatedAt: string;
};
