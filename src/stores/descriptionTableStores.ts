import { TableDataItem } from "@/types/DescriptionTable";
import { create } from "zustand";

interface TableDataStore {
    tableData: TableDataItem[];
    updateTableData: (id: number, updatedItem: Partial<TableDataItem>) => void;
    addTableData: (newItem: TableDataItem) => void;
    removeTableData: (id: number) => void;
  }

  export const useTableDataStore = create<TableDataStore>((set) => ({
    tableData: [
      { id: 1, label: "Lorem Ipsum Dolor", value: "10/19/2017" },
      { id: 2, label: "Lorem Ipsum Dolor", value: "Ut" },
      { id: 3, label: "Lorem Ipsum Dolor", value: "Eros" },
      { id: 4, label: "Lorem Ipsum Dolor", value: "✔ Yes" },
      { id: 5, label: "Lorem Ipsum Dolor", value: "Sit" },
      { id: 6, label: "Lorem Ipsum Dolor", value: "Lorem Ipsum Dolor" },
      { id: 7, label: "Lorem Ipsum Dolor Sit", value: "Lorem P" },
    ],
    updateTableData: (id, updatedItem) =>
      set((state) => ({
        tableData: state.tableData.map((item) =>
          item.id === id ? { ...item, ...updatedItem } : item
        ),
      })),
    addTableData: (newItem) =>
      set((state) => ({
        tableData: [...state.tableData, newItem],
      })),
    removeTableData: (id) =>
      set((state) => ({
        tableData: state.tableData.filter((item) => item.id !== id),
      })),
  }));