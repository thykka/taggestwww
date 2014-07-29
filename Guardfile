# A sample Guardfile
# More info at https://github.com/guard/guard#readme

# Guard::Compass
#
# You don't need to configure watchers for guard 'compass' declaration as they generated
# from your Compass configuration file. You might need to define the Compass working directory
# and point to the configuration file depending of your project structure.
#
# Available options:
#
# * working_directory: Define the Compass working directory, relative to the Guardfile directory
# * configuration_file: Path to the Compass configuration file, relative to :project_path
#
# Like usual, the Compass configuration path are relative to the :project_path

# guard 'compass', project_path: 'not_current_dir', configuration_file: 'path/to/my/compass_config.rb'
# guard :compass


puts `compass compile --time --quiet`
guard :compass do
  #-watch(%r{(.*)\scss\.s[ac]ss$})
  watch(%r{(.*)\scss\.s[ac]ss$})
end

guard :livereload, :grace_period => 0.5 do
  watch(%r{public/js/.+\.js})
  watch(%r{jade/(.+)\.jade}) { |m| "public/#{m[1]}.html" }
  watch(%r{scss/(.+)\.scss}) { |m| "public/css/#{m[1]}.css" }
	watch(%r{public/.+\.html})
end