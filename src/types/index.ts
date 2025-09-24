export interface User {
  id: string;
  username: string;
  role: 'admin' | 'editor' | 'viewer';
}

export interface InventoryItem {
  id: string;
  item_no: string;
  company_name: string;
  name: string;
  piece_type: string;
  office: string;
  qty: number;
  remaining_qty: number;
  quantity_sold: number;
  exit_date: string | null;
  image_path: string | null;
  created_at: string;
}

export interface CreateItemData {
  item_no: string;
  company_name: string;
  name: string;
  piece_type: string;
  office: string;
  qty: number;
  quantity_sold: number;
  exit_date: string | null;
  image_path: string | null;
}

export interface UpdateItemData extends Partial<CreateItemData> {
  id: string;
}

export interface ReportData {
  totalItems: number;
  totalQuantity: number;
  totalSold: number;
  totalRemaining: number;
  lowStockItems: InventoryItem[];
  recentExits: InventoryItem[];
}
