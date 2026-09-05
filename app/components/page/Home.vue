<script setup lang="ts">
import { orderBy } from 'es-toolkit/array'

const props = defineProps<{
	lang: 'zh' | 'en'
}>()

const appConfig = useAppConfig()
const t = useT()

// 中英内容树不同，缓存键需区分
const stemPrefix = computed(() => (props.lang === 'en' ? 'en/posts/%' : 'posts/%'))
const { data: listRaw } = await useAsyncData(
	`posts:index:${props.lang}`,
	() => getArticleIndexOptions(stemPrefix.value),
	{ default: () => [] },
)
const { listSorted, isAscending, sortOrder } = useArticleSort(listRaw, { bindDirectionQuery: 'asc', bindOrderQuery: 'sort' })
const { category, categories, listCategorized } = useCategory(listSorted, { bindQuery: 'category' })
const { page, totalPages, listPaged } = usePagination(listCategorized, { bindQuery: 'page' })

watch(category, () => {
	page.value = 1
})

const listRecommended = computed(() => orderBy(
	listRaw.value.filter(item => item.recommend !== null),
	['recommend', 'date'],
	['desc'],
))

const { data: previewCount } = await useAsyncData(
	'previews:count',
	() => queryCollection('content').where('stem', 'LIKE', 'previews/%').count(),
)
</script>

<template>
<BlogHeader class="mobile-only" to="/" tag="h1" />

<UtilHydrateSafe>
	<PostSlide v-if="listRecommended.length && page === 1 && !category" :list="listRecommended" />

	<div class="post-list">
		<PostOrderToggle
			v-model:is-ascending="isAscending"
			v-model:sort-order="sortOrder"
			v-model:category="category"
			:categories
		>
			<ZSecret>
				<UtilLink v-if="previewCount" to="/preview" class="preview-entrance">
					<Icon name="tabler:shield-lock" />
					{{ t('查看预览文章', 'View preview posts') }}
				</UtilLink>
			</ZSecret>
		</PostOrderToggle>

		<TransitionGroup tag="menu" class="proper-height" name="float-in">
			<PostArticle
				v-for="article, index in listPaged"
				:key="article.path"
				v-bind="article"
				:to="article.path"
				:use-updated="sortOrder === 'updated'"
				:style="getFixedDelay(index * 0.05)"
			/>
		</TransitionGroup>

		<ZPagination v-model="page" sticky avoid :total-pages="totalPages" />
	</div>
</UtilHydrateSafe>
</template>

<style lang="scss" scoped>
.post-list {
	margin: 1rem;
}

.float-in-leave-to {
	position: absolute;
}
</style>
