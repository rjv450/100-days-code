class Main {
    public static void main(String[] args) {
        int[] numbers = {2, -9, 0, 5, 12, -25, 22, 9, 8, 12};
        int index = search(numbers, 0);
        System.out.println("Searched index: " + index);
    }

    public static int search(int[] arr, int element) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == element) {
                return i;
            }
        }
        return -1;
    }
}
