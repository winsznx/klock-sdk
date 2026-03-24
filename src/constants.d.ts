export declare const BASE_CONTRACTS: {
    readonly testnet: {
        readonly chainId: 84532;
        readonly address: "0x22E7AA46aDDF743c99322212852dB2FA17b404b2";
        readonly explorerUrl: "https://sepolia.basescan.org/address/0x22E7AA46aDDF743c99322212852dB2FA17b404b2";
        readonly rpcUrl: "https://sepolia.base.org";
    };
    readonly mainnet: {
        readonly chainId: 8453;
        readonly address: "0xcF0A164b64b92Fa6262e312cDB60a12c302e8F1c";
        readonly explorerUrl: "https://basescan.org/address/0xcF0A164b64b92Fa6262e312cDB60a12c302e8F1c";
        readonly rpcUrl: "https://mainnet.base.org";
    };
};
export declare const STACKS_CONTRACTS: {
    readonly testnet: {
        readonly network: "testnet";
        readonly contractAddress: "ST31DP8F8CF2GXSZBHHHK5J6Y061744E1TP7FRGHT";
        readonly contractName: "pulse";
        readonly fullContractId: "ST31DP8F8CF2GXSZBHHHK5J6Y061744E1TP7FRGHT.pulse";
        readonly explorerUrl: "https://explorer.hiro.so/txid/ST31DP8F8CF2GXSZBHHHK5J6Y061744E1TP7FRGHT.pulse?chain=testnet";
        readonly apiUrl: "https://api.testnet.hiro.so";
    };
    readonly mainnet: {
        readonly network: "mainnet";
        readonly contractAddress: "SP31DP8F8CF2GXSZBHHHK5J6Y061744E1TNFGYWYV";
        readonly contractName: "pulse";
        readonly fullContractId: "SP31DP8F8CF2GXSZBHHHK5J6Y061744E1TNFGYWYV.pulse";
        readonly explorerUrl: "https://explorer.hiro.so/txid/SP31DP8F8CF2GXSZBHHHK5J6Y061744E1TNFGYWYV.pulse?chain=mainnet";
        readonly apiUrl: "https://api.mainnet.hiro.so";
    };
};
export declare const CHAIN_IDS: {
    readonly BASE_MAINNET: 8453;
    readonly BASE_SEPOLIA: 84532;
    readonly ETHEREUM_MAINNET: 1;
    readonly ETHEREUM_SEPOLIA: 11155111;
};
export declare const TESTNET_CHAIN_IDS: readonly [84532, 11155111];
export declare const MAINNET_CHAIN_IDS: readonly [8453, 1];
export declare const QUEST_IDS: {
    readonly DAILY_CHECKIN: 1;
    readonly RELAY_SIGNAL: 2;
    readonly UPDATE_ATMOSPHERE: 3;
    readonly NUDGE_FRIEND: 4;
    readonly MINT_HOUR_BADGE: 5;
    readonly COMMIT_MESSAGE: 6;
    readonly STAKE_STREAK: 7;
    readonly CLAIM_MILESTONE: 8;
    readonly PREDICT_PULSE: 9;
    readonly OPEN_CAPSULE: 10;
};
export declare const QUEST_POINTS: {
    readonly 1: 50;
    readonly 2: 100;
    readonly 3: 30;
    readonly 4: 40;
    readonly 5: 60;
    readonly 6: 20;
    readonly 7: 200;
    readonly 8: 500;
    readonly 9: 80;
    readonly 10: 1000;
};
export declare const PULSE_ABI: readonly [{
    readonly name: "dailyCheckin";
    readonly type: "function";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "pointsEarned";
        readonly type: "uint256";
    }];
}, {
    readonly name: "relaySignal";
    readonly type: "function";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "pointsEarned";
        readonly type: "uint256";
    }];
}, {
    readonly name: "updateAtmosphere";
    readonly type: "function";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [{
        readonly name: "weatherCode";
        readonly type: "uint8";
    }];
    readonly outputs: readonly [{
        readonly name: "pointsEarned";
        readonly type: "uint256";
    }];
}, {
    readonly name: "nudgeFriend";
    readonly type: "function";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [{
        readonly name: "friend";
        readonly type: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "pointsEarned";
        readonly type: "uint256";
    }];
}, {
    readonly name: "commitMessage";
    readonly type: "function";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [{
        readonly name: "message";
        readonly type: "string";
    }];
    readonly outputs: readonly [{
        readonly name: "pointsEarned";
        readonly type: "uint256";
    }];
}, {
    readonly name: "predictPulse";
    readonly type: "function";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [{
        readonly name: "predictedLevel";
        readonly type: "uint8";
    }];
    readonly outputs: readonly [{
        readonly name: "pointsEarned";
        readonly type: "uint256";
    }];
}, {
    readonly name: "claimDailyCombo";
    readonly type: "function";
    readonly stateMutability: "nonpayable";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "bonusPoints";
        readonly type: "uint256";
    }];
}, {
    readonly name: "getUserProfile";
    readonly type: "function";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly type: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "totalPoints";
            readonly type: "uint256";
        }, {
            readonly name: "currentStreak";
            readonly type: "uint256";
        }, {
            readonly name: "longestStreak";
            readonly type: "uint256";
        }, {
            readonly name: "lastCheckinTime";
            readonly type: "uint256";
        }, {
            readonly name: "totalCheckins";
            readonly type: "uint256";
        }, {
            readonly name: "level";
            readonly type: "uint256";
        }, {
            readonly name: "stakedAmount";
            readonly type: "uint256";
        }, {
            readonly name: "joinedTime";
            readonly type: "uint256";
        }, {
            readonly name: "exists";
            readonly type: "bool";
        }];
    }];
}, {
    readonly name: "getCurrentDay";
    readonly type: "function";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
    }];
}, {
    readonly name: "getGlobalStats";
    readonly type: "function";
    readonly stateMutability: "view";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "_totalUsers";
        readonly type: "uint256";
    }, {
        readonly name: "_totalCheckins";
        readonly type: "uint256";
    }, {
        readonly name: "_totalPointsDistributed";
        readonly type: "uint256";
    }];
}, {
    readonly name: "hasCompletedQuestToday";
    readonly type: "function";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly type: "address";
    }, {
        readonly name: "questId";
        readonly type: "uint8";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
    }];
}, {
    readonly name: "isComboAvailable";
    readonly type: "function";
    readonly stateMutability: "view";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly type: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
    }];
}, {
    readonly name: "UserJoined";
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "timestamp";
        readonly type: "uint256";
        readonly indexed: false;
    }];
}, {
    readonly name: "QuestCompleted";
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "questId";
        readonly type: "uint8";
        readonly indexed: true;
    }, {
        readonly name: "pointsEarned";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "day";
        readonly type: "uint256";
        readonly indexed: false;
    }];
}, {
    readonly name: "StreakUpdated";
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "newStreak";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "longestStreak";
        readonly type: "uint256";
        readonly indexed: false;
    }];
}, {
    readonly name: "ComboActivated";
    readonly type: "event";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "bonusPoints";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "day";
        readonly type: "uint256";
        readonly indexed: false;
    }];
}];
//# sourceMappingURL=constants.d.ts.map