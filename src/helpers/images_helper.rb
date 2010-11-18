module ImagesHelper
  
  def images_in(dir)
    Dir.glob(File.join(File.dirname(__FILE__), '..', '..', 'site', 'images', dir)).map do |file|
      File.basename(file)
    end
  end
  
end