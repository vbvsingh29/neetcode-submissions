class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // rows
        for (let i = 0; i < 9; i++) {
            const seen = new Set();
            for (let j = 0; j < 9; j++) {
                let val = board[i][j];
                if (val === ".") continue;

                if (seen.has(val)) return false;

                seen.add(val);
            }
        }
        // columns
        for (let i = 0; i < 9; i++) {
            const seen = new Set();
            for (let j = 0; j < 9; j++) {
                let val = board[j][i];
                if (val === ".") continue;

                if (seen.has(val)) return false;

                seen.add(val);
            }
        }
        // 3*3 box
        for (let i = 0; i < 9; i += 3) {
            for (let j = 0; j < 9; j += 3) {
                const seen = new Set();

                for (let m = i; m < i + 3; m++) {
                    for (let n = j; n < j + 3; n++) {
                        let val = board[m][n];
                        if (val === ".") continue;

                        if (seen.has(val)) return false;

                        seen.add(val);
                    }
                }
            }
        }

        return true;
    }

}
