class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let left = 0;
        let right = s.length - 1;

        while (left < right) {

            // skip non-alphanumeric
            while (
                left < right &&
                !this.isAlphaNum(s[left])
            ) {
                left++;
            }

            while (
                left < right &&
                !this.isAlphaNum(s[right])
            ) {
                right--;
            }

            // compare lowercase
            if (
                s[left].toLowerCase() !==
                s[right].toLowerCase()
            ) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }

    isAlphaNum(ch) {
        return (
            (ch >= 'a' && ch <= 'z') ||
            (ch >= 'A' && ch <= 'Z') ||
            (ch >= '0' && ch <= '9')
        );
    }
}