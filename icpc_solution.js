// icpc_solution.js
const fs = require('fs');

function solveICPC() {
    
    const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split(/\s+/);
    if (input.length < 2) return;
    
    const n = BigInt(input[0]);
    const h = BigInt(input[1]);

    const minH = 2n * n - 1n;
    const maxH = n * n;

    if (h < minH || h > maxH) {
        console.log("impossible");
        return;
    }

    for (let P = 2n * n - 1n; P >= 1n; P -= 2n) {
        let m = (P - 1n) / 2n;
        let k = n - 1n - m;
        let V = h - P - k;

        if (V < 0n) continue;

        let ks = BigInt(Math.floor(Math.sqrt(Number(V))));
        
        if (ks % 2n !== V % 2n) {
            ks -= 1n;
        }

        if (ks >= 0n && ks <= m) {

            if (V <= ks * (2n * m - ks)) {
                
                let S_arr = [];
                let in_S = new Set();
                let D = V - ks * ks;
                
                for (let i = 0n; i < ks; i++) {
                    S_arr.push(2n * i + 1n);
                }
                
                for (let i = Number(ks) - 1; i >= 0; i--) {
                    let max_add = 2n * (m - ks);
                    let add = D < max_add ? D : max_add;
                    S_arr[i] += add;
                    D -= add;
                    in_S.add(S_arr[i]);
                }
                
                let ans = [];
                
                for (let x = 2n * n - 1n; x > P; x -= 2n) {
                    ans.push(x);
                }
                for (let i = 0; i < S_arr.length; i++) {
                    ans.push(S_arr[i]);
                }
                ans.push(P);
                
                for (let x = P - 2n; x >= 1n; x -= 2n) {
                    if (!in_S.has(x)) {
                        ans.push(x);
                    }
                }
                
                console.log(ans.join(" "));
                return;
            }
        }
    }
    console.log("impossible");
}

solveICPC();