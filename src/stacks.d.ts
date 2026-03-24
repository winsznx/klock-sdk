import type { PulseQuestId, PulseStacksNetwork, StacksContractConfig, StacksDailyQuestStatus, StacksUserProfile } from './types';
export interface StacksReadOptions {
    network?: PulseStacksNetwork;
    sender?: string;
}
export declare function isStacksAddress(address: string | null | undefined): boolean;
export declare function isStacksMainnetAddress(address: string | null | undefined): boolean;
export declare function getStacksContract(network?: PulseStacksNetwork): StacksContractConfig;
export declare function getStacksContractByAddress(address: string | null | undefined): StacksContractConfig;
export declare function isStacksQuestCompleted(bitmap: number, questId: PulseQuestId): boolean;
export declare function getStacksCompletedQuests(bitmap: number): PulseQuestId[];
export declare function readStacksCurrentDay(options?: StacksReadOptions): Promise<number>;
export declare function readStacksDailyQuestStatus(user: string, day: number, options?: StacksReadOptions): Promise<StacksDailyQuestStatus | null>;
export declare function readStacksUserProfile(user: string, options?: StacksReadOptions): Promise<StacksUserProfile | null>;
export declare function readStacksCompletedQuests(user: string, options?: StacksReadOptions): Promise<PulseQuestId[]>;
//# sourceMappingURL=stacks.d.ts.map