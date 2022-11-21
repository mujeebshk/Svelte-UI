<script>
	import { TreeBranch, TreeLeaf, TreeView } from '../lib/index';
	import ButtonName from "./ButtonName.svelte";
	import Header from "./Header.svelte";
    import Search from "./Search.svelte";
</script>
<Header>Dashboard
    <!-- <Search /> -->
    <ButtonName>Dashboard</ButtonName>
</Header>
<TreeView
lineColor="#ff0000"
iconBackgroundColor="#ff0000"
iconColor="#ffffff"
branchHoverColor="#ff0000">
    <TreeBranch rootContent="Languages">
		<TreeLeaf>JavaScript</TreeLeaf>
		<TreeLeaf>C#</TreeLeaf>
	</TreeBranch>
	<TreeBranch rootContent="Frameworks">
		<TreeLeaf>Svelte</TreeLeaf>
		<TreeLeaf>React</TreeLeaf>
	</TreeBranch>
</TreeView>
<!-- <h1>Welcome to SvelteKit</h1> -->
<TreeView>
	<TreeBranch rootContent="Languages">
		<TreeLeaf>JavaScript/Typescript</TreeLeaf>
		<TreeLeaf>C#/.NET</TreeLeaf>
		<TreeBranch rootContent="Rust">
			<TreeLeaf>project</TreeLeaf>
			<TreeLeaf>
				<span style="color:red">project 2</span>
			</TreeLeaf>
			<TreeBranch rootContent="project 3">
				<TreeLeaf>Detail 1</TreeLeaf>
				<TreeLeaf>Detail 2</TreeLeaf>
			</TreeBranch>
		</TreeBranch>
		<TreeLeaf>C++</TreeLeaf>
	</TreeBranch>
	<TreeBranch defaultClosed rootContent="Close by default">
		<TreeLeaf>Svelte</TreeLeaf>
		<TreeLeaf>Vue</TreeLeaf>
		<TreeLeaf>React</TreeLeaf>
	</TreeBranch>
</TreeView>
<TreeView
lineColor="#ff0000"
iconBackgroundColor="#ff0000"
iconColor="#ffffff"
branchHoverColor="#ff0000">
    <TreeBranch rootContent="Languages">
		<TreeLeaf>JavaScript</TreeLeaf>
		<TreeLeaf>C#</TreeLeaf>
	</TreeBranch>
	<TreeBranch rootContent="Frameworks">
		<TreeLeaf>Svelte</TreeLeaf>
		<TreeLeaf>React</TreeLeaf>
	</TreeBranch>
</TreeView>
<!-- <h1>Welcome to SvelteKit</h1> -->
<TreeView>
	<TreeBranch rootContent="Languages">
		<TreeLeaf>JavaScript/Typescript</TreeLeaf>
		<TreeLeaf>C#/.NET</TreeLeaf>
		<TreeBranch rootContent="Rust">
			<TreeLeaf>project</TreeLeaf>
			<TreeLeaf>
				<span style="color:red">project 2</span>
			</TreeLeaf>
			<TreeBranch rootContent="project 3">
				<TreeLeaf>Detail 1</TreeLeaf>
				<TreeLeaf>Detail 2</TreeLeaf>
			</TreeBranch>
		</TreeBranch>
		<TreeLeaf>C++</TreeLeaf>
	</TreeBranch>
	<TreeBranch defaultClosed rootContent="Close by default">
		<TreeLeaf>Svelte</TreeLeaf>
		<TreeLeaf>Vue</TreeLeaf>
		<TreeLeaf>React</TreeLeaf>
	</TreeBranch>
</TreeView>


<!-- <style>
	:global(body) {
		background: #2a2a2a;
		color: white;
	}
</style> -->