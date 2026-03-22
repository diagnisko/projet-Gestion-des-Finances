import { useState, useContext, createContext, ReactNode } from 'react'

export interface Transaction {
  id: string
  type: 'revenue' | 'expense'
  amount: number
  category: string
  description: string
  date: string
}

interface FinanceContextType {
  transactions: Transaction[]
  addTransaction: (transaction: Omit<Transaction, 'id'>) => void
  deleteTransaction: (id: string) => void
  getRevenues: () => number
  getExpenses: () => number
  getBalance: () => number
}

const FinanceContext = createContext<FinanceContextType | undefined>(undefined)

export function FinanceProvider({ children }: { children: ReactNode }) {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: '1',
      type: 'revenue',
      amount: 2500,
      category: 'Salaire',
      description: 'Salaire mensuel',
      date: new Date().toISOString().split('T')[0],
    },
  ])

  const addTransaction = (transaction: Omit<Transaction, 'id'>) => {
    const newTransaction: Transaction = {
      ...transaction,
      id: Date.now().toString(),
    }
    setTransactions([newTransaction, ...transactions])
  }

  const deleteTransaction = (id: string) => {
    setTransactions(transactions.filter(t => t.id !== id))
  }

  const getRevenues = () => {
    return transactions
      .filter(t => t.type === 'revenue')
      .reduce((sum, t) => sum + t.amount, 0)
  }

  const getExpenses = () => {
    return transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0)
  }

  const getBalance = () => {
    return getRevenues() - getExpenses()
  }

  return (
    <FinanceContext.Provider
      value={
        transactions,
        addTransaction,
        deleteTransaction,
        getRevenues,
        getExpenses,
        getBalance,
      }
    >
      {children}
    </FinanceContext.Provider>
  )
}

export function useFinance() {
  const context = useContext(FinanceContext)
  if (!context) {
    throw new Error('useFinance doit être utilisé dans FinanceProvider')
  }
  return context
}
