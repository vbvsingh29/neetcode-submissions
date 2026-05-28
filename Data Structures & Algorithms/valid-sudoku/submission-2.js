class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */

    isValidSudoku(board) {
        const rows = Array.from({ length: 9 }, () => new Set());
        const cols = Array.from({ length: 9 }, () => new Set());
        const box = Array.from({ length: 9 }, () => new Set());

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                let val = board[i][j];
                if (val === ".") continue;
                let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                if (rows[i].has(val) || cols[j].has(val) || box[boxIndex].has(val)) return false;

                rows[i].add(val);
                cols[j].add(val);
                box[boxIndex].add(val);
            }
        }

        return true;
    }
}
