// write your code here...
/*
We have a list of asteroids representing asteroids in a row. Each asteroid is represented
by its size, and an integer array `asteroids` represents the sizes of the asteroids in the
order they appear.
The asteroids with negative sizes move to the left, and the asteroids with positive sizes
move to the right. When two asteroids collide, the smaller asteroid will explode. If they
are the same size, both asteroids will be destroyed. Two asteroids moving in the same
direction will never collide.
Implement the following function:
public int[] asteroidCollision(int[] asteroids) {
}
Example 1:
Input: asteroids = [5,10,-7]

Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
Example 2:
Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.
Example 3:
Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10
*/