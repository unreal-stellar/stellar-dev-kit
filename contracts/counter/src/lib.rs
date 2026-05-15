#![no_std]
use soroban_sdk::{contract, contractimpl, contracttype, symbol_short, Env, Symbol};

const COUNTER: Symbol = symbol_short!("COUNTER");

#[contracttype]
pub enum DataKey {
    Counter,
}

#[contract]
pub struct CounterContract;

#[contractimpl]
impl CounterContract {
    pub fn increment(env: Env) -> u32 {
        let current = Self::get(env.clone());
        let next = current + 1;
        env.storage().persistent().set(&DataKey::Counter, &next);
        env.events().publish((COUNTER,), next);
        next
    }

    pub fn get(env: Env) -> u32 {
        env.storage().persistent().get(&DataKey::Counter).unwrap_or(0)
    }

    pub fn event_topic() -> Symbol {
        COUNTER
    }
}

#[cfg(test)]
mod test {
    use super::{CounterContract, CounterContractClient};
    use soroban_sdk::{Env, Symbol};

    #[test]
    fn increments_counter() {
        let env = Env::default();
        let contract_id = env.register(CounterContract, ());
        let client = CounterContractClient::new(&env, &contract_id);

        assert_eq!(client.get(), 0);
        assert_eq!(client.increment(), 1);
        assert_eq!(client.increment(), 2);
    }

    #[test]
    fn has_stable_topic_name() {
        let topic = CounterContract::event_topic();
        assert_eq!(topic, Symbol::new(&Env::default(), "COUNTER"));
    }
}
