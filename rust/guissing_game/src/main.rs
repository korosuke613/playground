use std::io;
use rand::Rng;
use std::cmp::Ordering;

fn get_secret_number(low: u32, high: u32) -> u32{
    rand::thread_rng().gen_range(low, high)
}

/// Guess the number!
/// 数当てゲーム。
///
/// # Examples
///
/// ```
/// main()
///
/// ```
fn main() {
    println!("Guess the number!"); // 数を当ててごらん

    let secret_number = get_secret_number(1, 101);

    loop {
        println!("Please input your guess"); // ほら、予想を入力してね

        let mut guess = String::new();
        io::stdin().read_line(&mut guess)
            .expect("Failed to read line");  // 行の読み込みに失敗しました

        let guess: u32 = match guess.trim().parse(){
            Ok(num) => num,
            Err(_) => continue,
        };

        println!("You guessed: {}", guess);  // 次のように予想しました: {}

        match guess.cmp(&secret_number) {
            Ordering::Less => println!("Too small!"),
            Ordering::Greater => println!("Too big!"),
            Ordering::Equal => {
                println!("You win!");
                break;
            },
        }
    }
}
