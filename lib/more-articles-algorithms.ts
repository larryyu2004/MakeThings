import BinarySearchEn from "@/content/writing/more/binary-search-intervals.en.mdx";
import BinarySearchZh from "@/content/writing/more/binary-search-intervals.zh.mdx";
import PrefixFrequencyEn from "@/content/writing/more/prefix-frequency.en.mdx";
import PrefixFrequencyZh from "@/content/writing/more/prefix-frequency.zh.mdx";
import LongestUniqueEn from "@/content/writing/more/longest-unique-substring.en.mdx";
import LongestUniqueZh from "@/content/writing/more/longest-unique-substring.zh.mdx";
import SwapPairsEn from "@/content/writing/more/swap-nodes-in-pairs.en.mdx";
import SwapPairsZh from "@/content/writing/more/swap-nodes-in-pairs.zh.mdx";
import TrappingWaterEn from "@/content/writing/more/trapping-rain-water.en.mdx";
import TrappingWaterZh from "@/content/writing/more/trapping-rain-water.zh.mdx";
import CycleEntryEn from "@/content/writing/more/linked-list-cycle-entry.en.mdx";
import CycleEntryZh from "@/content/writing/more/linked-list-cycle-entry.zh.mdx";
import AnagramsEn from "@/content/writing/more/find-all-anagrams.en.mdx";
import AnagramsZh from "@/content/writing/more/find-all-anagrams.zh.mdx";
import SubsequencesEn from "@/content/writing/more/nondecreasing-subsequences.en.mdx";
import SubsequencesZh from "@/content/writing/more/nondecreasing-subsequences.zh.mdx";
import SubarraySumEn from "@/content/writing/more/subarray-sum-k.en.mdx";
import SubarraySumZh from "@/content/writing/more/subarray-sum-k.zh.mdx";

export const algorithmArticles = [
  {
    slug: "binary-search-intervals",
    category: { en: "ALGORITHMS / SEARCH", zh: "算法 / 查找" },
    title: { en: "Binary search is an interval contract", zh: "二分查找先约定区间" },
    summary: { en: "Closed and half-open intervals, exact matches, and insertion boundaries.", zh: "用闭区间与左闭右开区间理解精确查找和插入位置。" },
    content: { en: BinarySearchEn, zh: BinarySearchZh },
  },
  {
    slug: "prefix-frequency",
    category: { en: "ALGORITHMS / PREFIXES", zh: "算法 / 前缀" },
    title: { en: "A prefix table over values, not positions", zh: "沿着数值轴建立前缀表" },
    summary: { en: "Count previously seen values in a range with a value-domain prefix table.", zh: "用数值域前缀表统计历史数据在指定范围中的数量。" },
    content: { en: PrefixFrequencyEn, zh: PrefixFrequencyZh },
  },
  {
    slug: "longest-unique-substring",
    category: { en: "ALGORITHMS / WINDOWS", zh: "算法 / 滑动窗口" },
    title: { en: "The sliding window that forgets duplicates", zh: "用滑动窗口消除重复字符" },
    summary: { en: "A window invariant for the longest substring without repeated characters.", zh: "用窗口不变量求不含重复字符的最长连续子串。" },
    content: { en: LongestUniqueEn, zh: LongestUniqueZh },
  },
  {
    slug: "swap-nodes-in-pairs",
    category: { en: "ALGORITHMS / LINKED LISTS", zh: "算法 / 链表" },
    title: { en: "Swap linked-list nodes without losing the tail", zh: "交换链表节点时别丢掉后半段" },
    summary: { en: "Use a dummy predecessor and saved successor to rewire adjacent pairs safely.", zh: "借助哑节点和保存的后继，安全地交换相邻节点。" },
    content: { en: SwapPairsEn, zh: SwapPairsZh },
  },
  {
    slug: "trapping-rain-water",
    category: { en: "ALGORITHMS / ARRAYS", zh: "算法 / 数组" },
    title: { en: "Trapping rain water: from boundaries to two pointers", zh: "接雨水：从左右边界到双指针" },
    summary: { en: "Compare prefix arrays, two pointers, and a stack through one water-level formula.", zh: "从统一水位公式理解前后缀数组、双指针与单调栈。" },
    content: { en: TrappingWaterEn, zh: TrappingWaterZh },
  },
  {
    slug: "linked-list-cycle-entry",
    category: { en: "ALGORITHMS / LINKED LISTS", zh: "算法 / 链表" },
    title: { en: "Why two runners find a cycle entrance", zh: "快慢指针为什么能找到环入口" },
    summary: { en: "Detect a cycle and derive the entrance from pointer travel distances.", zh: "先用快慢指针判环，再从路程关系推导环入口。" },
    content: { en: CycleEntryEn, zh: CycleEntryZh },
  },
  {
    slug: "find-all-anagrams",
    category: { en: "ALGORITHMS / WINDOWS", zh: "算法 / 滑动窗口" },
    title: { en: "Anagrams are a fixed-size window", zh: "异位词对应一个定长窗口" },
    summary: { en: "Find every anagram start by comparing frequency counts in a fixed window.", zh: "在定长窗口中比较字符频率，找出每个异位词起点。" },
    content: { en: AnagramsEn, zh: AnagramsZh },
  },
  {
    slug: "nondecreasing-subsequences",
    category: { en: "ALGORITHMS / BACKTRACKING", zh: "算法 / 回溯" },
    title: { en: "Backtracking needs deduplication at each depth", zh: "回溯去重应该发生在同一层" },
    summary: { en: "Preserve input order while removing duplicate sibling choices.", zh: "保留原输入顺序，同时排除同一递归层的重复选择。" },
    content: { en: SubsequencesEn, zh: SubsequencesZh },
  },
  {
    slug: "subarray-sum-k",
    category: { en: "ALGORITHMS / PREFIXES", zh: "算法 / 前缀" },
    title: { en: "Count subarrays with a prefix-sum frequency map", zh: "用前缀和频率统计目标区间" },
    summary: { en: "Turn a range sum into two prefix values and count every matching earlier prefix.", zh: "把区间和转成两个前缀值之差，统计所有符合条件的起点。" },
    content: { en: SubarraySumEn, zh: SubarraySumZh },
  },
] as const;
