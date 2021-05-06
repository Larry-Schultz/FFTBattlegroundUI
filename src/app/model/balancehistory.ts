export interface BalanceHistoryData {
    labels: number[];
    leaderboardBalanceHistories: LeaderboardBalanceHistory[];
}

export interface LeaderboardBalanceHistory {
    playerName: string;
    balanceHistory: BalanceHistory[];
}

export interface BalanceHistory {
    balanceHistoryId: null;
    player: string;
    balance: number;
    balanceChange: number;
    create_timestamp: number;
}
